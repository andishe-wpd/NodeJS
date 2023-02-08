const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    // this will do the database stuff
    products.push(this);
  }
  static fetchAll() {
    return products;
  }
};
