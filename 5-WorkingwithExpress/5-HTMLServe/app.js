const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const adminRout = require("./routes/admin");
const shoppingPage = require("./routes/shop");
const notFound = require("./routes/404");

app.use(bodyParser.urlencoded({ extende: false }));

app.use('/admin',adminRout);
app.use(shoppingPage);
app.use(notFound);

app.listen(3000);
