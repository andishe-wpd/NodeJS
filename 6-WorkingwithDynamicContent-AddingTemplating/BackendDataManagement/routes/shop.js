const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const productData = require('./admin')

router.get("/", (req, res, next) => {
  console.log(productData)
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
