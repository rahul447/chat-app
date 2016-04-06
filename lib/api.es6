"use strict";

import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import mwAllowCrossDomain from "./middleware_services/mwAllowCrossDomain";
import mwErrorHandler from "./middleware_services/mwErrorHandler";
import mwAddrequestId from "./middleware_services/mwAddRequestId";
import mwIdValidation from "./middleware_services/mwIdValidation";
import checkEnvironmentVariables from "./util/checkEnvironmentVariables";
import practitioner from "./endpoints/practitioner/router";
import patient from "./endpoints/patient/router";
import organization from "./endpoints/organization/router";
import relatedPerson from "./endpoints/relatedPerson/router";
import healthcareService from "./endpoints/healthcareService/router";
import group from "./endpoints/group/router";
import location from "./endpoints/location/router";
import person from "./endpoints/person/router";
import observation from "./endpoints/observation/router";
import condition from "./endpoints/condition/router";
import encounter from "./endpoints/encounter/router";
import procedure from "./endpoints/procedure/router";
import dataElement from "./endpoints/dataElement/router";
import questionnaire from "./endpoints/questionnaire/router";
import imagingStudy from "./endpoints/imagingStudy/router";
import binary from "./endpoints/binary/router";
import composition from "./endpoints/composition/router";
import documentReference from "./endpoints/documentReference/router";
import documentManifest from "./endpoints/documentManifest/router";
import schedule from "./endpoints/schedule/router";
import slot from "./endpoints/slot/router";
import appointment from "./endpoints/appointment/router";
import claim from "./endpoints/claim/router";
import coverage from "./endpoints/coverage/router";
import questionnaireRes from "./endpoints/questionnaireRes/router";
import claimResponse from "./endpoints/claimResponse/router";
import valueSet from "./endpoints/valueSet/router";
import episodeOfCare from "./endpoints/episodeOfCare/router";
import conceptMap from "./endpoints/conceptMap/router";
import allergyIntolerance from "./endpoints/allergyIntolerance/router";
import carePlan from "./endpoints/carePlan/router";
import diagnosticReport from "./endpoints/diagnosticReport/router";
import medicationStatement from "./endpoints/medicationStatement/router";
import messageHeader from "./endpoints/messageHeader/router";
import provenance from "./endpoints/provenance/router";
import communication from "./endpoints/communication/router";
import device from "./endpoints/device/router";
import immunization from "./endpoints/immunization/router";
import medicationAdmin from "./endpoints/medicationAdministration/router";
import list from "./endpoints/list/router";
import structureDefinition from "./endpoints/structureDefinition/router";
import account from "./endpoints/account/router";
import auditEvent from "./endpoints/auditEvent/router";
import contract from "./endpoints/contract/router";
import deviceComponent from "./endpoints/deviceComponent/router";
import deviceMetric from "./endpoints/deviceMetric/router";
import eligibilityRequest from "./endpoints/eligibilityRequest/router";
import eligibilityResponse from "./endpoints/eligibilityResponse/router";
import enrollmentResponse from "./endpoints/enrollmentResponse/router";
import explanationOfBenefit from "./endpoints/explanationOfBenefit/router";
import implementationGuide from "./endpoints/implementationGuide/router";
import medicationDispense from "./endpoints/medicationDispense/router";
import namingSystem from "./endpoints/namingSystem/router";
import operationDefinition from "./endpoints/operationDefinition/router";
import operationOutcome from "./endpoints/operationOutcome/router";
import paymentNotice from "./endpoints/paymentNotice/router";
import paymentReconciliation from "./endpoints/paymentReconciliation/router";
import riskAssessment from "./endpoints/riskAssessment/router";
import searchParameter from "./endpoints/searchParameter/router";

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
app.use(bodyParser.json());
app.use(mwIdValidation);
app.use(mwAllowCrossDomain);
app.use(mwAddrequestId);
app.use(urlPrefix + "/practitioner", practitioner);
app.use(urlPrefix + "/patient", patient);
app.use(urlPrefix + "/organization", organization);
app.use(urlPrefix + "/relatedPerson", relatedPerson);
app.use(urlPrefix + "/healthcareService", healthcareService);
app.use(urlPrefix + "/group", group);
app.use(urlPrefix + "/location", location);
app.use(urlPrefix + "/person", person);
app.use(urlPrefix + "/observation", observation);
app.use(urlPrefix + "/condition", condition);
app.use(urlPrefix + "/encounter", encounter);
app.use(urlPrefix + "/procedure", procedure);
app.use(urlPrefix + "/dataElement", dataElement);
app.use(urlPrefix + "/questionnaire", questionnaire);
app.use(urlPrefix + "/imagingStudy", imagingStudy);
app.use(urlPrefix + "/binary", binary);
app.use(urlPrefix + "/composition", composition);
app.use(urlPrefix + "/documentReference", documentReference);
app.use(urlPrefix + "/documentManifest", documentManifest);
app.use(urlPrefix + "/schedule", schedule);
app.use(urlPrefix + "/slot", slot);
app.use(urlPrefix + "/appointment", appointment);
app.use(urlPrefix + "/claim", claim);
app.use(urlPrefix + "/coverage", coverage);
app.use(urlPrefix + "/questionnaireRes", questionnaireRes);
app.use(urlPrefix + "/claimResponse", claimResponse);
app.use(urlPrefix + "/valueSet", valueSet);
app.use(urlPrefix + "/episodeOfCare", episodeOfCare);
app.use(urlPrefix + "/conceptMap", conceptMap);
app.use(urlPrefix + "/allergyIntolerance", allergyIntolerance);
app.use(urlPrefix + "/carePlan", carePlan);
app.use(urlPrefix + "/diagnosticReport", diagnosticReport);
app.use(urlPrefix + "/medicationStatement", medicationStatement);
app.use(urlPrefix + "/messageHeader", messageHeader);
app.use(urlPrefix + "/provenance", provenance);
app.use(urlPrefix + "/communication", communication);
app.use(urlPrefix + "/device", device);
app.use(urlPrefix + "/immunization", immunization);
app.use(urlPrefix + "/medicationAdmin", medicationAdmin);
app.use(urlPrefix + "/list", list);
app.use(urlPrefix + "/structureDefinition", structureDefinition);
app.use(urlPrefix + "/account", account);
app.use(urlPrefix + "/auditEvent", auditEvent);
app.use(urlPrefix + "/contract", contract);
app.use(urlPrefix + "/deviceComponent", deviceComponent);
app.use(urlPrefix + "/deviceMetric", deviceMetric);
app.use(urlPrefix + "/eligibilityRequest", eligibilityRequest);
app.use(urlPrefix + "/eligibilityResponse", eligibilityResponse);
app.use(urlPrefix + "/enrollmentResponse", enrollmentResponse);
app.use(urlPrefix + "/explanationOfBenefit", explanationOfBenefit);
app.use(urlPrefix + "/implementationGuide", implementationGuide);
app.use(urlPrefix + "/medicationDispense", medicationDispense);
app.use(urlPrefix + "/namingSystem", namingSystem);
app.use(urlPrefix + "/operationDefinition", operationDefinition);
app.use(urlPrefix + "/operationOutcome", operationOutcome);
app.use(urlPrefix + "/paymentNotice", paymentNotice);
app.use(urlPrefix + "/paymentReconciliation", paymentReconciliation);
app.use(urlPrefix + "/riskAssessment", riskAssessment);
app.use(urlPrefix + "/searchParameter", searchParameter);

app.use(methodOverride);
app.use(mwErrorHandler);

// Starts the app
app.listen(app.get("port"), function () {
  console.log("Server has started and is listening on port: " + app.get("port"));
});
