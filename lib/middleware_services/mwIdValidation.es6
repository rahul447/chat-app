"use strict";
import ApiError from "../util/apiError";
import loggInstance from "../util/FhirApiLogger";

function mwIdValidation(req, res, next) {
  loggInstance.info("============mwIdValidation[Validate id]==================>");
  if (req.body.id) {
    loggInstance.debug("============[Id found in Requestbody]===================>");
    let apiError = new ApiError(req.id, "Error", [`Element id found inside body "${req.id}"`],
      [{"err": "Invalid element inside body"}]
      , 400);

    return next(apiError);
  }

  next();
}

export default mwIdValidation;
