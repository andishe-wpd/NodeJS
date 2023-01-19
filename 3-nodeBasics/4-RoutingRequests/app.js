const http = require("http");
const server = http.createServer((request, response) => {
  response.setHeader("conten-type", "text/html");
  response.write("<html>");
  response.write("<head><title>html response</title></head>");
  response.write(
    "<body><p>html response content</p><hr/><p>you can write whatever html content do you want</p></body>"
  );
  response.write("</html>");
  response.end();
});

server.listen(3000);
