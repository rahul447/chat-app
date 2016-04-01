"use strict";

import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import mwAllowCrossDomain from "./middleware_services/mwAllowCrossDomain";
import mwErrorHandler from "./middleware_services/mwErrorHandler";
import checkEnvironmentVariables from "./util/checkEnvironmentVariables";
import practitioner from "./endpoints/practitioner/router";
import patient from "./endpoints/patient/router";
import organization from "./endpoints/organization/router";
import relatedPerson from "./endpoints/relatedPerson/router";
import healthcareService from "./endpoints/healthcareService/router";
import group from "./endpoints/group/router";
import location from "./endpoints/location/router";
import person from "./endpoints/person/router";

let {NODE_ENV} = process.env,
  nodeEnv = NODE_ENV || "local",
  config = Object.freeze(require("../config/" + nodeEnv)),
  app = express(),
  urlPrefix = config.urlPrefix,
  environmentVariables = require("../config/environmentVariables");

// Checks the required environment variables
// Logs the missing environment variables and exit the application
if (config.environmentVariableChecker.isEnabled) {
  checkEnvironmentVariables(environmentVariables);
}

// Sets the relevant config app-wise
app.set("port", config.http.port);

app.use(session({
  "secret": "encrypted key",
  "saveUninitialized": true,
  "resave": true,
  "store": new session.MemoryStore()
}));

// Defines top middleware and routes
app.use(mwAllowCrossDomain);
app.use(bodyParser.json());
app.use(urlPrefix + "/practitioner", practitioner);
app.use(urlPrefix + "/patient", patient);
app.use(urlPrefix + "/organization", organization);
app.use(urlPrefix + "/relatedPerson", relatedPerson);
app.use(urlPrefix + "/healthcareService", healthcareService);
app.use(urlPrefix + "/group", group);
app.use(urlPrefix + "/location", location);
app.use(urlPrefix + "/person", person);

app.use(methodOverride);
app.use(mwErrorHandler);

// Starts the app
app.listen(app.get("port"), function () {
  console.log("Server has started and is listening on port: " + app.get("port"));
});
