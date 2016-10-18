"use strict";

// eslint disable no-var

var environmentVariables = require("./environmentVariables"),
  config = {
    "http": {
      "protocol": "http",
      "domain": "127.0.0.1",
      "port": 8050
    },
    "appName": "ch-fhir-api",
    "nodeBridgeQueueCount": Number(environmentVariables.NODE_BRIDGE_QUEUE_COUNT),
    "rabbitMQ": {
      "url": environmentVariables.FHIR_RABBITMQ_URL,
      "queueName": environmentVariables.FHIR_QUEUE_NAME,
      "exchangeName": environmentVariables.FHIR_EXCHANGE_NAME,
      "exchangeType": "direct",
      "prefetchCount": Number(environmentVariables.FHIR_PREFETCH_COUNT),
      "options": {}
    },
    "mongoDb": {
      "connectionString": environmentVariables.FHIR_MONGO_CONNECTION_STRING,
      "operationTimeout": 4000,
      "connectionOptions": {
        "server": {
          "poolSize": 5,
          "socketOptions": {
            "autoReconnect": true,
            "keepAlive": 0
          },
          "reconnectTries": 30,
          "reconnectInterval": 1000
        }
      },
      "promiseTimeout": 4500
    },
    "fhirValidator": {
      "baseURI": {
        "protocol": "http",
        "domain": "10.18.6.110",
        "port": 8080,
        "version": "baseDstu2"
      }
    },
    "logger": {
      "name": "ch-fhir-api",
      "streams": [
        {
          "level": environmentVariables.FHIR_LOGGING_LEVEL,
          "stream": process.stdout
        },
        {
          "level": environmentVariables.FHIR_LOGGING_LEVEL,
          "path": "/var/log/fhir/ch-fhir-api-debug.log"
        },
        {
          "level": "info",
          "path": "/var/log/fhir/ch-fhir-api-info.log"
        }
      ]
    },
    "smtp": {
      "host": "smtp.apptixemail.net",
      "port": 587,
      "to": "shaktim@cantahealth.com",
      "auth": {
        "user": "info@cantahealth.com",
        "pass": "Access@1234"
      }
    },
    "authorization": {
      "authorize": false
    },
    "environmentVariableChecker": {
      "isEnabled": true
    },
    "urlPrefix": "/fhir/v1",
    "secretKey": environmentVariables.API_SECRET_KEY
  };

module.exports = config;

// eslint enable no-var
