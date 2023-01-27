const express = require("express");
const path = require("path");
const router = express.Router();
const rootPath = require('../helper/rootPath')

router.get("/", (request, response, next) => {
  response.sendFile(path.join(rootPath, "views", "shop.html"));
});

module.exports = router;
