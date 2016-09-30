"use strict";

import {projections} from "../../util/focusEntitledResources";
import {resources} from "../../util/focusEntitledResources";
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
      collectionName, projectionKey, obj,
      keys = Object.keys(idArray),
      len = Object.keys(idArray).length;

    for (let i = 0; i < len; i++) {
      projectionKey = keys[i].substring(0, keys[i].length - 3);
      projectionKey = projectionKey.toLowerCase();
      collectionName = projectionKey && projectionKey.charAt(0).toUpperCase() + projectionKey.substring(1);
      console.log("***", resources[collectionName], projections[req.body.MetricName][projectionKey], idArray[projectionKey]);
    }
    obj = {
      "id": req.body.ids,
      "projection": projections[req.body.MetricName],
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
