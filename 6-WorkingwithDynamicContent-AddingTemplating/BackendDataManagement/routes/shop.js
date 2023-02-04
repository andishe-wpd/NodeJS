const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const {productData} = require("./admin");

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  console.log(productData)
  res.render("shop", {productsList: productData , pageTitle: "SHOP"});
});

module.exports = router;
