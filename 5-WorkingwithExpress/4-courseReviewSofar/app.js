const express = require("express");
const app = express();
const index = require("./routes/index");
const user = require("./routes/user");
const admin = require("./routes/admin");
const notFound = require("./routes/404");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(index);
app.use(user);
app.use("/admin", admin);
app.use(notFound);

app.listen(3000);
