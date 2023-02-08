const express = require("express");

const router = express.Router();
const {
  addProductController,
  postAddproductController,
} = require("../controllers/products");

// /admin/add-product => GET
router.get("/add-product", addProductController);

// /admin/add-product => POST
router.post("/add-product", postAddproductController);

exports.routes = router;
