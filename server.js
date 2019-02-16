var express = require('express');
const https = require('https');

  app = express(),
  port = process.env.PORT || 443,
  bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/DeveloperRoute.js'); 
routes(app);
const privateKey = fs.readFileSync('/etc/letsencrypt/live/dev.mintdev.co/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/dev.mintdev.co/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/dev.mintdev.co/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
const httpsServer = https.createServer(credentials, app);

console.log('Packager RESTful API server started on: https');
