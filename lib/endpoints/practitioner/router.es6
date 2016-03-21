"use strict";

import express from "express";

let router = express.Router(),
  rootRoute = router.route("/");

rootRoute
  .get((req, res) => {
    res.send("Hello Practitioner GET");
  });

export default router;
