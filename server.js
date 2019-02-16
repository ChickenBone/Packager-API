var express = require('express');
const https = require('https');
const fs = require('fs');

  app = express(),
  port = process.env.PORT || 8443,
  bodyParser = require('body-parser');
  app.use('/download', express.static(__dirname+'/api/public')); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/DeveloperRoute.js'); 
routes(app);
const privateKey = fs.readFileSync('/etc/letsencrypt/live/dev.mintdev.co/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/dev.mintdev.co/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/dev.mintdev.co/chain.pem', 'utf8');

const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
};
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443, () => {
        console.log('HTTPS Server running on port 8443');
});
console.log('Packager RESTful API server started on: https');