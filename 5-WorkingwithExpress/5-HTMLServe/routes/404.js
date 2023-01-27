const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/", (request, response, next) => {
  // response.status(404).send('<h1>404 page , not found</h1>')
  response
    .status(404)
    .sendFile(path.join(__dirname, "../", "views", "404.html"));
});

module.exports = router;
