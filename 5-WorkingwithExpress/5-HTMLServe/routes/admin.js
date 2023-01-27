const express = require("express");
const router = express.Router();
const path = require('path')

router.use("/add-product", (request, response, next) => {
  // response.send(
  //   "<form action='added-product' method='POST'><input  type='text' name='title' placeholeder='write your product name' > <input  type='text' name='subtitle' placeholeder='write your product name' ><button type='submit'>add product submit</button></form>"
  // );
  response.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
});

router.post("/added-product", (request, response, next) => {
  response.redirect("/");
});

module.exports = router;
