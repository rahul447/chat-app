"use strict";

// eslint disable no-var

var environmentVariables = require("./environmentVariables"),
  config = {
    "http": {
      "protocol": "http",
      "domain": "127.0.0.1",
      "port": 8050
    },
    "rabbitMQ": {
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
        "domain": "127.0.0.1",
        "port": 8080,
        "version": "dstu2"
      }
    },
    "logger": {
      name: "ch-fhir-api",
      "streams": [
        {
          level: environmentVariables.FHIR_LOGGING_LEVEL,
          console: true
        }
      ]
    },
    "authorization": {
      "authorize": false
    },
    "caching": {
      "host": environmentVariables.FHIR_REDIS_HOST,
      "port": environmentVariables.FHIR_REDIS_PORT,
      "ttl": 24*60*60
    },
    "environmentVariableChecker": {
      "isEnabled": false
    },
    "urlPrefix": "/fhir/v1"
  };

module.exports = config;

// eslint enable no-var
