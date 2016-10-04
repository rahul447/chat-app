"use strict";
import ApiError from "../util/apiError";
import {resources} from "../util/focusEntitledResources";
import loggInstance from "../util/FhirApiLogger";

function mwCheckFocusEntitlements(req, res, next) {
  loggInstance.info("============mwCheckFocusEntitlements [Validate focus entitlements]==================>");

  if (Object.keys(resources).indexOf(req.params.resourceType) === -1) {
    loggInstance.debug("============[Focus Entitlements not found]===================>");
    return next(new ApiError(req.id, "Unauthorized", "Not Authorize to access requested resource", "", 401));
  }
  return next();
}

export default mwCheckFocusEntitlements;
