// http, https, os, path, fs
// const http = require('./' or '/' or global module)
const http = require("http");

// http.createServer()  // this needs a request listener so make it

//  request in incomming message ans response is response
// can used as  a inline ananymose funvtion
// function requestListener(request , response){
// }

// alternativly i can use event driven articheture like this

const server = http.createServer((request, response) => {
  console.log(request.headers);
  setTimeout(() => {
    // console.log("exited");
    // exited the process listening
    // hard exit
    // process.exit();
  }, 3000);
}); // this needs a request listener so make it

// turn on server listening
server.listen(3000);
