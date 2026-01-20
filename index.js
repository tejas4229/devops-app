<<<<<<< HEAD
const http = require('http');
http.createServer((req, res) => {
  res.end("lay xala Project Running Successfully");
}).listen(3000);
=======
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello Tejas! CI/CD Pipeline Working Successfully!');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App running on port ${PORT}`);
});

>>>>>>> 7fe7d00 (Update app and Kubernetes manifests)
