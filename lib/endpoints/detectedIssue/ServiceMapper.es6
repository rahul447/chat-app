"use strict";

export class ServiceMapper {

  constructor(serviceInstance, events, uniqueIdService, mapperMaster) {

    this.serviceInstance = serviceInstance;
    this.events = events;
    this.uniqueIdService = uniqueIdService;
    this.mapperMaster = mapperMaster;

  }

  createDetectedIssue(req, res, next) {
    console.log("========= Create DetectedIssue===========");
    this.mapperMaster.processCudRequest({
      "service": this.serviceInstance,
      "event": this.events.fhirResources.detectedIssue.create,
      "uniqueId": this.uniqueIdService.createUniqueId(),
      "req": req,
      "res": res,
      "next": next
    });

  }

  retrieveDetectedIssue(req, res, next) {
    console.log("========= Retrieve DetectedIssue ===========");
    console.log(req.params);
    let obj = {
      "id": req.params.id,
      "service": this.serviceInstance,
      "event": this.events.fhirResources.detectedIssue.retrieve,
      "res": res,
      "req": req,
      "next": next
    };

    this.mapperMaster.processRetrieveRequest(obj);
  }

}
