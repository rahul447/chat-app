"use strict";

// eslint disable no-var

var environmentVariables = {
  "FHIR_MONGO_CONNECTION_STRING": process.env.FHIR_MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/fhir", // "mongodb://127.0.0.1:27017/fhir"
  "FHIR_LOGGING_LEVEL": process.env.FHIR_LOGGING_LEVEL || "debug", // debug
  "FHIR_REDIS_HOST": process.env.FHIR_REDIS_HOST,
  "FHIR_REDIS_PORT": process.env.FHIR_REDIS_PORT,
  "rabbitMQUrl": process.env.rabbitMQUrl || "amqp://localhost"
};

module.exports = environmentVariables;

// eslint enable no-var
