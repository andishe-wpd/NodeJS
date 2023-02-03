const fs = require('fs')
const express = require("express");
const Router = express.Router();
const Root = require('../helper/rootPath')
const path  = require('path')

Router.use("/", (request, response) => {
    response.status(404).sendFile(path.join(Root, 'views', '404.html'))
});



module.exports = Router