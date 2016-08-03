"use strict";

import JWT from "../util/JWTImplementaion";
import ApiError from "../util/apiError";
import logger from "../util/FhirApiLogger";

function mwAuthenticateRequest(req, res, next) {

  console.log("secret key", req.app.get("secretKey"));

  let {NODE_ENV} = process.env,
    nodeEnv = NODE_ENV || "local",
    config = Object.freeze(require("../../config/" + nodeEnv)),
    secret = req.app.get("secretKey"),
    jwtInstance = new JWT(secret),
    tokenRegex = new RegExp("^(b|B)earer\\s"),
    token = req.header("Authorization");

  if (!config.authorization.authorize) {
    logger.debug("Authentication is disabled by confguration");
    return next();
  }

  if (token && tokenRegex.test(token)) {
    token = token.split(" ")[1];

    console.log("token ==> ", token);

    jwtInstance
      .verifyToken(token)
      .then(data => {
        console.log("Authentication Token verification done successfully", data);
        req.user = JSON.parse(JSON.stringify(data));
        console.log("Authentication Token added", req.user);
        return next();

      }, failure => {
        logger.debug("Unable to verify the supplied token", failure);
        return next(new ApiError(req.id, "Bad Request", "Token Verification Failed", "", 400));
      });

  } else {
    logger.debug("Authentication credentials were missing or incorrect");
    return next(new ApiError(req.id, "Unauthorized", "Authorization credentials missing or incorrect", "", 401));
  }
}

export default mwAuthenticateRequest;
