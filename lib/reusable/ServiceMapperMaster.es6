"use strict";

export class ServiceMapperMaster {

  constructor(urlBase) {

    this.urlBase = urlBase;

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
    console.log(args.service);

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
      "requestId": args.uniqueId  // temporary -- will embedd the requestID in req using middleware
    })
      .then(msg => {
        console.log("reusable\\ServiceMapperMaster.es6:processCudRequest Request with id " +
          args.requestId + " has been successfully processed");
        args.res.status(202).send(msg);
      }, err => {
        args.res.status(400).send({"error": err});
      }).done();
  }

  processRetrieveRequest(args) {
    console.log("reusable\\ServiceMapperMaster.es6:processRetrieveRequest");

    args.service.retrieve(args)
      .then(msg => {
        args.res.status(200).send(msg);
      })
      .catch(err => args.res.status(400).send({"error": err}))
      .done();
  }

}
