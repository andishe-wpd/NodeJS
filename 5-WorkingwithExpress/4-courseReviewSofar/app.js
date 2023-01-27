const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("silimilikoom");
  response.send("<h1>silimilikoom</h1>");
});

app.listen(3000);
