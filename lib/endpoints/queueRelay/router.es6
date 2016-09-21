"use strict";

import express from "express";
import {getChFhirServiceInstance} from "ch-fhir-services";
import {ServiceMapper} from "./ServiceMapper";
import {ServiceMapperMaster} from "../../reusable/ServiceMapperMaster";
import loggInstance from "../../util/FhirApiLogger";

let {NODE_ENV} = process.env,
  nodeEnv = NODE_ENV || "local",
  config = Object.freeze(require("../../../config/" + nodeEnv)),
  chFhirServiceInstance = getChFhirServiceInstance(
    config.logger,
    config.mongoDb,
    config.rabbitMQ,
    config.fhirValidator
  ),
  uniqueIdService = chFhirServiceInstance.uniqueIdService,
  serviceInstance = chFhirServiceInstance.serviceInstance,
  events = chFhirServiceInstance.events,
  urlBase = `${config.http.protocol}://${config.http.domain}:${config.http.port}/queue`,
  loggerInstance = loggInstance,
  serviceMapperMasterIns = new ServiceMapperMaster(urlBase, loggerInstance, config),
  serviceMapperInstance = new ServiceMapper(
    serviceInstance, events, uniqueIdService, serviceMapperMasterIns, loggerInstance),
  router = express.Router(),
  queueFetchRoute = router.route("/fetch"),
  queueProcessMigrateRoute = router.route("/:emr/:practiceName/migrationCompleted"),
  queueSendRoute = router.route("/push");

queueSendRoute
  .post(serviceMapperInstance.sendToQueue.bind(serviceMapperInstance));

queueFetchRoute
  .get(serviceMapperInstance.getMessageFromQueue.bind(serviceMapperInstance));

queueProcessMigrateRoute
  .get(serviceMapperInstance.generateMigrateEvent.bind(serviceMapperInstance));

export default router;
