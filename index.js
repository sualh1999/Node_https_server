const https = require('https')
const fs = require('fs')

const options = {
  key : fs.readFileSync('certeficates/key.pem'),
  cert : fs.readFileSync('certeficates/cert.pem')
}

const server = https.createServer(options,(req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Hello Salih!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at https server`);
});