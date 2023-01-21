const http = require("http");
const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === "/") {
    response.setHeader("content-type", "text/html");
    response.write("<html>");
    response.write("<head><title>html response</title></head>");
    response.write(
      "<body><p>html response content</p><hr/><form action='/welcome' method=POST><input type=text ></input><button type=submit>ok</button></form></body>"
    );
    response.write("</html>");
  }
  if (url === "/welcome") {
    response.write("<html>");
    response.write("<head><title>not found </title></head>");
    response.write("<body><p>welcome to the welcome page </p></body>");
    response.write("</html>");
  } else {
    response.write("<html>");
    response.write("<head><title>not found </title></head>");
    response.write("<body><p>cant find the page you lookin for </p></body>");
    response.write("</html>");
    response.end();
  }
});

server.listen(3000);
