const http = require("http");

const express = require("express");
const app = express();

app.use((request, response, next) => {
    console.log(request.url)
    response.end()
    next()
});
app.use((request, response, next) => {
    console.log('request.url')
});

const server = http.createServer(app);

server.listen(3000);
