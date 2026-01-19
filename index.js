const http = require('http');
http.createServer((req, res) => {
  res.end("your Project Running Successfully");
}).listen(3000);
