const { products } = require("./users");


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
  products.push({ title: req.body.title });
  res.redirect("/");
};
