const productModel = require("../model/product");

exports.addProductController = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddproductController = (req, res, next) => {
  const products = new productModel(req.body.title);
  products.save();
  res.redirect("/");
};
