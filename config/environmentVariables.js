"use strict";

// eslint disable no-var

var environmentVariables = {
  "FHIR_MONGO_CONNECTION_STRING": process.env.FHIR_MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/fhir", // "mongodb://127.0.0.1:27017/fhir"
  "FHIR_LOGGING_LEVEL": process.env.FHIR_LOGGING_LEVEL || "debug", // debug
  "FHIR_REDIS_HOST": process.env.FHIR_REDIS_HOST,
  "FHIR_REDIS_PORT": process.env.FHIR_REDIS_PORT,
  "FHIR_RABBITMQ_URL": process.env.FHIR_RABBITMQ_URL || "amqp://integration:integration@10.18.6.109:5672",
  "FHIR_QUEUE_NAME": process.env.FHIR_QUEUE_NAME || "test",
  "FHIR_EXCHANGE_NAME": process.env.FHIR_EXCHANGE_NAME || "test-cantaHealth",
};

module.exports = environmentVariables;

// eslint enable no-var
