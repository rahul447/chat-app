"use strict";
export class ServiceMapper {

  constructor(serviceInstance, events, logger, mapperMaster) {

    this.serviceInstance = serviceInstance;
    this.events = events;
    this.logger = logger;
    this.mapperMaster = mapperMaster;

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
