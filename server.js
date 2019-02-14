var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/DeveloperRoute.js'); 
routes(app);


app.listen(port);


console.log('Packager RESTful API server started on: ' + port);
