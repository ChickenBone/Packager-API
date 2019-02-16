module.exports = function (app) {
  var Developer = require('../controllers/DeveloperController.js');
  app.route('/dev')
    .get(Developer.list_all_developers)
  app.route('/dev/:devName')
    .get(Developer.list_all_dev_tweaks)
    app.route('/dev/:devName/:tweakName')
    .get(Developer.list_tweak)
  app.get('/dev/:dev/:tweak/:version/:filename', function (req, res) {
    var filePath = "./api/public/developers/"+req.params.dev+"/"+req.params.tweak+"/"+req.params.version+"/"+req.params.filename;
    var fileName = req.params.fileName; 
    res.download(filePath, fileName); 
    return;   
  });
  app.get('/',function(req,res) {
    res.json('Welcome to the packager API! We are open source on GitHub!');
  });
  // app.route('/dev/:devList/:apiToken')
  // .post(Developer.update_devlist)

  // app.route('/dev/:devName/:apiToken')
  // .post(Developer.update_dev)
  
  // app.route('/dev/:devName/:tweakName/:apiToken')
  // .post(Developer.update_tweak)

}


