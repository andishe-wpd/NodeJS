const productModel = require("../model/product");
console.log(productModel.fetchAll)

exports.shopviewController = (req, res, next) => {
  productModel.fetchAll((product) => {
    res.render("shop", {
      prods: product,
      pageTitle: "Shop",
      path: "/",
      hasProducts: product.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
