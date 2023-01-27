const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (request, response, next) => {
  // console.log("im in the middleware");
  // response.send("<h1>this is the resopnse</h1>");
  response.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

module.exports = router;
