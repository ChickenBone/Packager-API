module.exports = function (app) {
  var Developer = require('../controllers/DeveloperController.js');
  app.route('/dev')
    .get(Developer.list_all_developers)
  app.route('/dev/:devName')
    .get(Developer.list_all_dev_tweaks)
    app.route('/dev/:devName/:tweakName')
    .get(Developer.list_tweak)
  app.get('/:dev/:tweak/:version/:filename', function (req, res) {
    var filePath = "./api/public/developers/"+req.params.dev+"/"+req.params.tweak+"/"+req.params.version+"/"+req.params.filename;
    var fileName = "1.zip"; 
    res.download(filePath, fileName); 
    return;   
  });
}


