const express = require("express");

const router = express.Router();

router.get("/", (request, response, next) => {
  // console.log("im in the middleware");
  response.send("<h1>this is the resopnse</h1>");
});

module.exports = router;
