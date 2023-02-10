const products = [];
const fs = require("fs");
const path = require("path");
const rootPath = require("../util/path");

const getProductFromFile = (cb) => {
  const p = path.join(rootPath, "data", "products.json");
  fs.readFile(p, (err, fileContent) => {
    return cb(err, fileContent);
  });
};
const p = path.join(rootPath, "data", "products.json");
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    getProductFromFile((err, fileContent) => {
      let product = [];
      if (!err) {
        product = JSON.parse(fileContent);
      }
      product.push(this);
      fs.writeFile(p, JSON.stringify(product), (err) => {
        console.log(err);
      });
    });
    products.push(this);
  }

  static fetchAll(callbackFunctionHandler) {
    getProductFromFile((err, fileContent) => {
      if (err) {
        return callbackFunctionHandler([]);
      }
      return callbackFunctionHandler(JSON.parse(fileContent));
    });
  }
};
