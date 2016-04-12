"use strict";

export class ServiceMapper {

  constructor(serviceInstance, events, uniqueIdService, mapperMaster) {

    this.serviceInstance = serviceInstance;
    this.events = events;
    this.uniqueIdService = uniqueIdService;
    this.mapperMaster = mapperMaster;

  }

  createClaimResponse(req, res, next) {
    console.log("========= Create ClaimResponse ===========");
    this.mapperMaster.processCudRequest({
      "service": this.serviceInstance,
      "event": this.events.fhirResources.claimResponse.create,
      "uniqueId": this.uniqueIdService.createUniqueId(),
      "req": req,
      "res": res,
      "next": next
    });

  }

  retrieveClaimResponse(req, res, next) {
    console.log("========= Retrieve ClaimResponse ===========");
    console.log(req.params);
    let obj = {
      "id": req.params.id,
      "service": this.serviceInstance,
      "event": this.events.fhirResources.claimResponse.retrieve,
      "res": res,
      "req": req,
      "next": next
    };

    this.mapperMaster.processRetrieveRequest(obj);
  }

}
