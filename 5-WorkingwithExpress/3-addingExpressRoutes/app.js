const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded());
// app.use(bodyParser.urlencoded({extende:false}));

app.use("/add-product", (request, response, next) => {
  console.log("im in the first middleware");
  response.send(
    "<form action='/added-product' method='POST'><input  type='text' name='title' placeholeder='write your product name' > <input  type='text' name='subtitle' placeholeder='write your product name' ><button type='submit'>add product submit</button></form>"
  );
});

app.post("/added-product", (request, response, next) => {
// app.delete("/added-product", (request, response, next) => {
// app.put("/added-product", (request, response, next) => {
// app.patch("/added-product", (request, response, next) => {
// app.update("/added-product", (request, response, next) => {
  console.log(request.body);
  response.redirect("/");
});

app.use("/", (request, response, next) => {
  console.log("im in the middleware");
  response.send("<h1>this is the resopnse</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
