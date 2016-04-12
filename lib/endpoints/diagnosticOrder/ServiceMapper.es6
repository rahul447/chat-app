"use strict";

export class ServiceMapper {

  constructor(serviceInstance, events, uniqueIdService, mapperMaster) {

    this.serviceInstance = serviceInstance;
    this.events = events;
    this.uniqueIdService = uniqueIdService;
    this.mapperMaster = mapperMaster;

  }

  createDiagnosticOrder(req, res, next) {
    console.log("========= Create DiagnosticOrder===========");
    this.mapperMaster.processCudRequest({
      "service": this.serviceInstance,
      "event": this.events.fhirResources.diagnosticOrder.create,
      "uniqueId": this.uniqueIdService.createUniqueId(),
      "req": req,
      "res": res,
      "next": next
    });

  }

  retrieveDiagnosticOrder(req, res, next) {
    console.log("========= Retrieve DiagnosticOrder ===========");
    console.log(req.params);
    let obj = {
      "id": req.params.id,
      "service": this.serviceInstance,
      "event": this.events.fhirResources.diagnosticOrder.retrieve,
      "res": res,
      "req": req,
      "next": next
    };

    this.mapperMaster.processRetrieveRequest(obj);
  }

}
