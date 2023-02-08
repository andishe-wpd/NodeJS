exports.notFoundController = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
