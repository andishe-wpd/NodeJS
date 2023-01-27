const express = require("express");
const router = express.Router();
const path = require("path");
const rootPath = require("../helper/rootPath");

router.use("/add-product", (request, response, next) => {
  response.sendFile(path.join(rootPath, "views", "add-product.html"));
});

router.post("/added-product", (request, response, next) => {
  response.redirect("/");
});

module.exports = router;
