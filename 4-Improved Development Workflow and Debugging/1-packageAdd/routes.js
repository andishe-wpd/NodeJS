const fs = require("fs");

const routes = (request, response) => {
  const url = request.url;
  const METHOD = request.method;
  // console.log(METHOD);
  // console.log(url === "/welcome" && METHOD === "POST");
  if (url === "/") {
    // response.setHeader("content-type", "text/html");
    response.write("<html>");
    response.write("<head><title>html response</title></head>");
    response.write(
      "<body><p>html response content</p><hr/><form action='/welcome' method=POST><input type=text name=andisheMessage></input><button type=submit>ok</button></form></body>"
    );
    response.write("</html>");
  }
  if (url === "/welcome" && METHOD === "GET") {
    // console.log("fired");
    response.write("<html>");
    response.write("<head><title>not found </title></head>");
    response.write("<body><p>welcome to the welcome page </p></body>");
    response.write("</html>");
    return response.end();
  }
  if (url === "/welcome" && METHOD === "POST") {
    const body = [];
    request.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });
    request.on("end", () => {
      const mainBody = Buffer.concat(body).toString();
      const message = mainBody.split("=")[1];
      // console.log(message);
      fs.writeFile("message.txt", message, (err) => {
        response.statusCode = 302;
        response.setHeader("location", "/welcome");
        return response.end();
      });
    });
  } else {
    response.write("<html>");
    response.write("<head><title>not found </title></head>");
    response.write("<body><p>cant find the page you lookin for </p></body>");
    response.write("</html>");
    return response.end();
  }
};

exports.handler = routes;
exports.text = "some harde coded text";
