const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const productData = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product",{pageTitle: "ADD PRODUCT"});
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  productData.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router;
exports.routs = router;
exports.productData = productData;
