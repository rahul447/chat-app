"use strict";

import projections from "../../util/focusEntitledResources";
export class ServiceMapper {

  constructor(serviceInstance, events, logger, mapperMaster) {

    this.serviceInstance = serviceInstance;
    this.events = events;
    this.loggerInstance = logger;
    this.mapperMaster = mapperMaster;

  }

  retrieveResourceByIdentifierMulti(req, res, next) {
    this.loggerInstance.info("========= Retrieving for focus fourth level ===========");
    let obj = {
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
    console.log("========= Retrieve Flag ===========");
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
