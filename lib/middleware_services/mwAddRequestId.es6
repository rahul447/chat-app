"use strict";
import nodeUuid from "node-uuid";

function mwAddRequestId(req, res, next) {
  req.id = nodeUuid.v1();

  next();
}
export default mwAddRequestId;
