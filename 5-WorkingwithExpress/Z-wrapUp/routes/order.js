const express = require("express");
const path = require("path");
const router = express.Router();
const rootPath = require("../helper/rootPath");
const FS = require("fs");
router.get("/order", (request, response, next) => {
  // response.send('salam')
  response.sendFile(path.join(rootPath, "views", "order.html"));
});
router.post("/order", (request, response, next) => {
  FS.writeFile(request.body.name, request.body.name, (request) => {
    response.redirect("/");
  });
});

module.exports = router;
