"use strict";
import ApiError from "../util/apiError";

function mwErrorHandler(err, req, res, next) {

  if (err instanceof Error) {

    res.status(500).send("Internal Server Error");

  } else if (err instanceof ApiError) {

    res.status(err.statusCode).send(err);

  }
  next();
}

export default mwErrorHandler;
