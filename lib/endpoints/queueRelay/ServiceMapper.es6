"use strict";

export class ServiceMapper {

  constructor(serviceInstance, events, uniqueIdService, mapperMaster) {

    this.serviceInstance = serviceInstance;
    this.events = events;
    this.uniqueIdService = uniqueIdService;
    this.mapperMaster = mapperMaster;

  }

  sendToQueue(req, res, next) {
    console.log("========= Push to Queue ===========");
    this.mapperMaster.processQueueRequest({
      "service": this.serviceInstance,
      "req": req,
      "res": res,
      "next": next
    });
  }

  getMessageFromQueue(req, res, next) {
    console.log("Consume from Queue");
    this.mapperMaster.processConsumeRequest({
      "service": this.serviceInstance,
      "req": req,
      "res": res,
      "next": next
    });
  }

}
