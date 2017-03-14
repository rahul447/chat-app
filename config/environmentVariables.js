"use strict";

// eslint disable no-var

var environmentVariables = {
  "MONGO_CONNECTION_STRING": process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/chat-app",
  "API_SECRET_KEY": process.env.API_SECRET_KEY || "mySecretKey"
};

module.exports = environmentVariables;

// eslint enable no-var
