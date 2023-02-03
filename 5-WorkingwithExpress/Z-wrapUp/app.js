const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const homePage = require("./routes/homePage");
const order = require("./routes/order");
const notFound = require("./routes/404");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(homePage);
app.use(order);
app.use(notFound);

app.listen(3000);
