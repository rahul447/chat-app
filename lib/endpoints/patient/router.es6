"use strict";

import express from "express";
import {getChFhirServiceInstance} from "ch-fhir-services";
import {ServiceMapper} from "./ServiceMapper";
import {ServiceMapperMaster} from "../../reusable/ServiceMapperMaster";

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
  urlBase = `${config.http.protocol}://${config.http.domain}:${config.http.port}/patient`,
  serviceMapperMasterIns = new ServiceMapperMaster(urlBase),
  serviceMapperInstance = new ServiceMapper(serviceInstance, events, uniqueIdService, serviceMapperMasterIns),
  router = express.Router(),
  patientRootRoute = router.route("/"),
  patientParamRoute = router.route("/:id");

patientParamRoute
  .get(serviceMapperInstance.retrievePatient.bind(serviceMapperInstance));

patientRootRoute
  .post(serviceMapperInstance.createPatient.bind(serviceMapperInstance));

export default router;
