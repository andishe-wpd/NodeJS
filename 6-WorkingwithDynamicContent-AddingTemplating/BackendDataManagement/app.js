const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine','pug')
app.set('views', 'views')

app.use('/admin',adminRoutes.routs);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render(path.join(__dirname, "views", "404"));
});

app.listen(3000);
