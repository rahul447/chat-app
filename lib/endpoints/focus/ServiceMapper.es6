"use strict";

import {projections} from "../../util/focusEntitledResources";
import {resources} from "../../util/focusEntitledResources";
import ApiError from "../../util/apiError";
export class ServiceMapper {

  constructor(serviceInstance, events, logger, mapperMaster) {

    this.serviceInstance = serviceInstance;
    this.events = events;
    this.loggerInstance = logger;
    this.mapperMaster = mapperMaster;

  }

  retrieveResourceByIdentifierMulti(req, res, next) {
    this.loggerInstance.info("========= Retrieving for focus fourth level Multi ===========");

    let idArray = req.body.ids,
      projectionIndex, collectionName, projectionKey, obj, data = {},
      keys = Object.keys(idArray),
      len = Object.keys(idArray).length;

    for (let i = 0; i < len; i++) {
      projectionIndex = keys[i];
      projectionKey = keys[i].substring(0, keys[i].length - 3);
      projectionKey = projectionKey.toLowerCase();
      collectionName = projectionKey && projectionKey.charAt(0).toUpperCase() + projectionKey.substring(1);
      if (!(idArray[projectionIndex].length && projections[req.body.MetricName][resources[collectionName]])) {
        return next(new ApiError(req.id, "Unauthorized", "Not Authorize to access requested resource", "", 401));
      }
      data[resources[collectionName]] = idArray[projectionIndex];
    }

    obj = {
      "id": data,
      "projection": projections[req.body.MetricName] || {},
      "service": this.serviceInstance,
      "res": res,
      "req": req,
      "next": next
    };

    this.mapperMaster.processRetrieveFocusResourceMulti(obj);
  }

  retrieveResourceByIdentifier(req, res, next) {
    this.loggerInstance.info("========= Retrieving for focus fourth level from sqlId ===========");
    let obj = {
      "id": req.params.clientSqlId,
      "service": this.serviceInstance,
      "event": this.events.fhirResources[req.params.resourceType.toLowerCase()].retrieve,
      "res": res,
      "req": req,
      "next": next
    };

    this.mapperMaster.processRetrieveFocusResource(obj);
  }
}
