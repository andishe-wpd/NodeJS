const express = require("express");
const path = require('path')
const router = express.Router();
const rootPath = require('../helper/rootPath')
router.get("/order", (request, response, next) => {
    // response.send('salam')
    response.sendFile(path.join(rootPath, 'views' , 'order.html' ))
});

module.exports = router
