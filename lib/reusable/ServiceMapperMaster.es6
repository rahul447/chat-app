"use strict";

export class ServiceMapperMaster {

  constructor(urlBase, loggerInstance, config) {

    this.urlBase = urlBase;
    this.loggerInstance = loggerInstance;
    this.config_ = config || {};
  }

  static extractEntityIds(parameters) {
    let entityIds = {};

    for (let key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        entityIds[key] = parameters[key];
      }
    }
    return entityIds;
  }

  processCudRequest(args) {
    this.loggerInstance.info("==========ProcessCudRequest======================>");
    let entityIds,
      validMsg = {},
      resourceUri = this.urlBase + args.req.originalUrl.substring(0);

    resourceUri = resourceUri.replace(/\/+$/, "");

    if (args.uniqueId) { // When the method is Create
      args.req.params.id = args.uniqueId;
      resourceUri = resourceUri + "/" + args.req.params.id;
    }

    entityIds = ServiceMapperMaster.extractEntityIds(args.req.params);

    args.service.processCudRequest({
      "event": args.event,
      "payload": args.req.body,
      "entityIds": entityIds,
      "resourceUri": resourceUri,
      "requestId": args.req.id
    })
      .then(msg => {
        this.loggerInstance.info("reusable\\ServiceMapperMaster.es6:processCudRequest Request with id " +
          args.req.id + " has been successfully processed");
        validMsg.entityId = entityIds.id;
        validMsg.requestId = args.req.id;
        validMsg.msg = msg;
        msg.statusCode = typeof msg.statusCode !== "undefined" ? msg.statusCode : 200;
        args.res.status(msg.statusCode).send(validMsg);
      }, err => {
        err.statusCode = typeof err.statusCode !== "undefined" ? err.statusCode : 500;
        args.res.status(err.statusCode).send({"error": err});
      }).done();
  }

  processRetrieveRequest(args) {
    this.loggerInstance.info("=================processRetrieveRequest=================>");
    this.loggerInstance.info("reusable\\ServiceMapperMaster.es6:processRetrieveRequest");
    args.service.retrieve(args)
      .then(msg => {
        args.res.status(200).send(msg);
      })
      .catch(err => args.res.status(400).send({"error": err}))
      .done();
  }

  processQueueRequest(args) {
    this.loggerInstance.info("=============processQueueRequest========================>");
    this.loggerInstance.info("reusable\\ServiceMapperMaster.es6:processQueueRequest");

    let bridgeQueueCount,
      queueName;

    if (this.config_ && Object.keys(this.config_).length > 0) {

      bridgeQueueCount = this.config_.nodeBridgeQueueCount;
      queueName = this.config_.rabbitMQ.queueName;
      queueName = bridgeQueueCount <= 1 ? queueName : this.getRandomQueueName(queueName, 1, bridgeQueueCount);
      console.log("queue name ===============" + queueName);
    }

    args.queueName = queueName;

    args.service.publish(args)
      .then(msg => {
        args.res.status(200).send(msg);
      })
      .catch(err => args.res.status(400).send({"error": err}))
      .done();
  }

  processConsumeRequest(args) {
    this.loggerInstance.info("===============processConsumeRequest======================>");
    this.loggerInstance.info("reusable\\ServiceMapperMaster.es6:processConsumeRequest");

    args.service.consume({"queueName": ""})
      .then(msg => {
        args.res.status(200).send(msg);
      })
      .catch(err => args.res.status(400).send({"error": err}))
      .done();
  }

  getRandomQueueName(queueName, minIncluded, maxIncluded) {

    let randomNo = Math.floor(Math.random() * (maxIncluded - minIncluded + 1)) + minIncluded;

    return `${queueName}-${randomNo}`;
  }

  processMigrateEvent(args) {
    this.loggerInstance.info("================processMigrateEvent========================>");
    this.loggerInstance.info("reusable\\ServiceMapperMaster.es6:processMigrateEvent");

    let bridgeQueueCount,
      queueName;

    if (this.config_ && Object.keys(this.config_).length > 0) {

      bridgeQueueCount = this.config_.nodeBridgeQueueCount;
      queueName = this.config_.rabbitMQ.queueName;
      queueName = bridgeQueueCount <= 1 ? queueName : this.getRandomQueueName(queueName, 1, bridgeQueueCount);
      console.log("queue name ===============" + queueName);
    }

    args.queueName = queueName;

    args.service.publish(args)
      .then(msg => {
        args.res.status(200).send(msg);
      })
      .catch(err => args.res.status(400).send({"error": err}))
      .done();
  }

  processRetrieveFocusResourceMulti(args) {
    this.loggerInstance.info("=================processRetrieveFocusResource=================>", args);

    this.loggerInstance.info("reusable\\ServiceMapperMaster.es6:processRetrieveRequest");
    args.service.retrieveforFocusFourthLevel(args)
      .then(msg => {
        args.res.status(200).send(msg);
      })
      .catch(err => args.res.status(400).send({"error": err}))
      .done();
  }

  processRetrieveFocusResource(args) {
    this.loggerInstance.info("=================processRetrieveResource=================>");
    this.loggerInstance.info("reusable\\ServiceMapperMaster.es6:processRetrieveRequest");
    args.service.retrievefromSqlId(args)
      .then(msg => {
        console.log("in retrieve", msg);
        args.res.status(200).send(msg);
      })
      .catch(err => args.res.status(400).send({"error": err}))
      .done();
  }
}
