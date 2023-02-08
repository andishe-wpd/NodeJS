exports.products = [];
exports.shopviewController = (req, res, next) => {
  res.render("shop", {
    prods: this.products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: this.products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
