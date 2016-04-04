"use strict";

export class ServiceMapperMaster {

  constructor(urlBase, loggerInstance) {

    this.urlBase = urlBase;
    this.loggerInstance = loggerInstance;

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
    let entityIds,
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
        args.res.status(msg.statusCode).send(msg);
      }, err => {
        args.res.status(err.statusCode).send({"error": err});
      }).done();
  }

  processRetrieveRequest(args) {
    this.loggerInstance.info("reusable\\ServiceMapperMaster.es6:processRetrieveRequest");
    args.service.retrieve(args)
      .then(msg => {
        args.res.status(200).send(msg);
      })
      .catch(err => args.res.status(400).send({"error": err}))
      .done();
  }

}
