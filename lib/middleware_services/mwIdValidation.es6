"use strict";
import ApiError from "../util/apiError";

function mwIdValidation(req, res, next) {
  if (req.body.id) {
    let apiError = new ApiError(req.id, "Error", [`Element id found inside body "${req.id}"`],
      [{"err": "Invalid element inside body"}]
      , 400);

    return res.status(400).send(apiError);
  }

  next();
}

export default mwIdValidation;
