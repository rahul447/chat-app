"use strict";

import express from "express";
import bodyParser from "body-parser";
import mwAllowCrossDomain from "./middleware_services/mwAllowCrossDomain";
import mwErrorHandler from "./middleware_services/mwErrorHandler";
import ApiError from "./util/apiError";
import domain from "express-domain-middleware";
import mongoose from "mongoose";
import expressSession from "express-session";
import path from "path";
import favicon from "static-favicon";
import logger from "morgan";
import cookieParser from "cookie-parser";

let app = express(), server = require('http').createServer(app), nodeEnv = "local", io = require('socket.io')(server),
  config = Object.freeze(require("../config/" + nodeEnv));
mongoose.connect(config.mongoDb.connectionString);

app.use(expressSession({secret: config.secretKey}));
app.use(favicon());
app.use(cookieParser());
app.use(logger(nodeEnv));
app.use(domain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(mwAllowCrossDomain);
app.use(mwErrorHandler);

// Initialize appication with route / (that means root of the application)
app.get('/:username/:password', (req, res) => {
  app.use(express.static(path.join(__dirname)));
  res.sendFile(path.join(__dirname, './views', 'index.html'));
});

// Register events on socket connection
io.on('connection',(socket) => {
  socket.on('chatMessage', (from, msg) => {
    io.emit('chatMessage', from, msg);
  });
  socket.on('notifyUser', (user) => {
    io.emit('notifyUser', user);
  });
});

// Sets the relevant config app-wise
app.set("port", config.http.port);
app.set("secretKey", config.secretKey);

app.use(function resourceNotFound(req, res, next) {
  let apiError = new ApiError(req.id, "Error", [`Resource doesn't exists for RequestId ${req.id}`], "", 404);

  next(apiError);
});

// Starts the app
app.listen(app.get("port"), () => {
  console.log(new Date(), "Server has started and is listening on port: " + app.get("port"));
});
