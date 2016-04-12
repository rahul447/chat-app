"use strict";

export class ServiceMapper {

  constructor(serviceInstance, events, uniqueIdService, mapperMaster) {

    this.serviceInstance = serviceInstance;
    this.events = events;
    this.uniqueIdService = uniqueIdService;
    this.mapperMaster = mapperMaster;

  }

  createEligibilityResponse(req, res, next) {
    console.log("========= Create EligibilityResponse===========");
    this.mapperMaster.processCudRequest({
      "service": this.serviceInstance,
      "event": this.events.fhirResources.eligibilityResponse.create,
      "uniqueId": this.uniqueIdService.createUniqueId(),
      "req": req,
      "res": res,
      "next": next
    });

  }

  retrieveEligibilityResponse(req, res, next) {
    console.log("========= Retrieve EligibilityResponse===========");
    console.log(req.params);
    let obj = {
      "id": req.params.id,
      "service": this.serviceInstance,
      "event": this.events.fhirResources.eligibilityResponse.retrieve,
      "res": res,
      "req": req,
      "next": next
    };

    this.mapperMaster.processRetrieveRequest(obj);
  }

}
