const products = [];

const fs = require("fs");
const path = require("path");
const rootPath = require("../util/path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    // this will do the database stuff

    // first read the data
    const p = path.join(rootPath, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      let product = [];
      if (!err) {
        product = JSON.parse(fileContent);
      }
      product.push(this);
      fs.writeFile(p, JSON.stringify(product), (err) => {
        console.log(err);
      });
    });

    // scnd wirte the data

    products.push(this);
  }

  static fetchAll(callbackFunctionHandler) {
    const p = path.join(rootPath, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return callbackFunctionHandler([]);
      }
      return callbackFunctionHandler(JSON.parse(fileContent));
    });
  }
};
