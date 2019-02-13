var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/DeveloperModel.js'), 
  bodyParser = require('body-parser');
  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Packagerdb', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/DeveloperRoute.js'); 
routes(app);


app.listen(port);


console.log('Packager RESTful API server started on: ' + port);
