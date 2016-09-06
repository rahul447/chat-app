"use strict";
export class ServiceMapper {

  constructor(serviceInstance, events, logger, mapperMaster) {

    this.serviceInstance = serviceInstance;
    this.events = events;
    this.loggerInstance = logger;
    this.mapperMaster = mapperMaster;

  }

  retrieveResourceByIdentifier(req, res, next) {
    this.loggerInstance.info("========= Retrieving for focus fourth level ===========");
    let obj = {
      "id": req.body.ids,
      "service": this.serviceInstance,
      "res": res,
      "req": req,
      "next": next
    };

    this.mapperMaster.processRetrieveFocusResource(obj);
  }
}
