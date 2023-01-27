const express = require("express");
const app = express();
const user = require('./routes/user')
const admin = require('./routes/admin')
const notFound = require('./routes/404')



app.use(user)
app.use(admin)
app.use(notFound)

app.listen(3000);
