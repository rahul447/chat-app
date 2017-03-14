"use strict";

// eslint disable no-var

var environmentVariables = require("./environmentVariables"),
  config = {
    "http": {
      "protocol": "http",
      "domain": "127.0.0.1",
      "port": 8060
    },
    "appName": "chat-app",
    "mongoDb": {
      "connectionString": environmentVariables.MONGO_CONNECTION_STRING,
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
    "authorization": {
      "authorize": false
    },
    "secretKey": environmentVariables.API_SECRET_KEY,
    'facebookAuth' : {
      'clientID'      : 'your-secret-clientID-here', // your App ID
      'clientSecret'  : 'your-client-secret-here', // your App Secret
      'callbackURL'   : 'http://127.0.0.1:8080/auth/facebook/callback'
    }
  };

module.exports = config;

// eslint enable no-var
