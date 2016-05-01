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
      "message": req.body,
      "req": req,
      "res": res,
      "next": next
    });
  }

  getMessageFromQueue(req, res, next) {
    console.log(req.url);
    console.log("Consume from Queue");
    this.mapperMaster.processConsumeRequest({
      "service": this.serviceInstance,
      "req": req,
      "res": res,
      "next": next
    });
  }

  generateMigrateEvent(req, res, next) {
    console.log("here to generate");
    console.log(this.events.focus.legacyMigration);
    let event = {};

    event.msg = this.events.focus.legacyMigration;
    console.log("======generate migration event=============");
    this.mapperMaster.processMigrateEvent({
      "message": event,
      "service": this.serviceInstance,
      "req": req,
      "res": res,
      "next": next
    });
  }

}
