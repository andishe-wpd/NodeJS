const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const productData = require('./admin')

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render(path.join(rootDir, "views", "shop"));
});

module.exports = router;
