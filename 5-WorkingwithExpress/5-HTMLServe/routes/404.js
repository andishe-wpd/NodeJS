const express = require("express");
const router = express.Router();
const path = require("path");
const rootPath = require("../helper/rootPath");
router.use("/", (request, response, next) => {
  response.status(404).sendFile(path.join(rootPath, "views", "404.html"));
});

module.exports = router;
