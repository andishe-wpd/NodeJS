const express = require("express");
const path = require('path')
const router = express.Router();
const rootPath = require('../helper/rootPath')
router.get("/", (request, response, next) => {
    // response.send('salam')
    response.sendFile(path.join(rootPath, 'views' , 'home.html' ))
});

module.exports = router
