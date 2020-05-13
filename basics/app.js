const http = require("http");

server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<h1>Hello World</h1>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
