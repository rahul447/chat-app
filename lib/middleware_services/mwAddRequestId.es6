"use strict";
import nodeUuid from "node-uuid";
import loggInstance from "../util/FhirApiLogger";

function mwAddRequestId(req, res, next) {
  loggInstance.info("================mwAddRequestId==============");
  req.id = nodeUuid.v1();

  next();
}
export default mwAddRequestId;
