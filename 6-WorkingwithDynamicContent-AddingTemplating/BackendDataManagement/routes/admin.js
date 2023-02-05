const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const productData = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product",{pageTitle: "ADD PRODUCT"});
});

router.post("/add-product", (req, res, next) => {
  productData.push({ title: req.body.title });
  res.redirect("/");
});

exports.routs = router;
exports.productData = productData;
