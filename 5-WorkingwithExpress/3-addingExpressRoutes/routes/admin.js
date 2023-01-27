const express = require("express");
const router = express.Router();

router.use("/add-product", (request, response, next) => {
  // console.log("im in the first middleware");
  response.send(
    "<form action='added-product' method='POST'><input  type='text' name='title' placeholeder='write your product name' > <input  type='text' name='subtitle' placeholeder='write your product name' ><button type='submit'>add product submit</button></form>"
  );
});

router.post("/added-product", (request, response, next) => {
  // app.delete("/added-product", (request, response, next) => {
  // app.put("/added-product", (request, response, next) => {
  // app.patch("/added-product", (request, response, next) => {
  // app.update("/added-product", (request, response, next) => {
  // console.log(request.body);
  response.redirect("/");
});

module.exports = router;
