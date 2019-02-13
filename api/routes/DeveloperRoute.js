module.exports = function(app) {
    var Developer = require('../controllers/DeveloperController.js');
  
    // todoList Routes
    app.route('/dev')
      .get(Developer.list_all_developers)
}  