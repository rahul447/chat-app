"use strict";

export class ServiceMapper {

  constructor(serviceInstance, events, uniqueIdService, mapperMaster) {

    this.serviceInstance = serviceInstance;
    this.events = events;
    this.uniqueIdService = uniqueIdService;
    this.mapperMaster = mapperMaster;

  }

  createClinicalImpression(req, res, next) {
    console.log("========= Create ClinicalImpression===========");
    this.mapperMaster.processCudRequest({
      "service": this.serviceInstance,
      "event": this.events.fhirResources.clinicalImpression.create,
      "uniqueId": this.uniqueIdService.createUniqueId(),
      "req": req,
      "res": res,
      "next": next
    });

  }

  retrieveClinicalImpression(req, res, next) {
    console.log("========= Retrieve ClinicalImpression ===========");
    console.log(req.params);
    let obj = {
      "id": req.params.id,
      "service": this.serviceInstance,
      "event": this.events.fhirResources.clinicalImpression.retrieve,
      "res": res,
      "req": req,
      "next": next
    };

    this.mapperMaster.processRetrieveRequest(obj);
  }

}
