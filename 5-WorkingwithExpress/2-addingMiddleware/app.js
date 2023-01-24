const http = require("http");

const express = require("express");
const app = express();

app.use((request, response, next) => {
    console.log('im in the middleware')
    next()
});
app.use((request, response, next) => {
    console.log('i wanna send a response in next middleware')
    next()
});
app.use((request, response, next) => {
    response.send('<h1>hello from express</h1>')

});

// const server = http.createServer(app);

// server.listen(3000);


app.listen(3000)