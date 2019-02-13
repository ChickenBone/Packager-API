'use strict';


var mongoose = require('mongoose'),
Developers = mongoose.model('Developers');

exports.list_all_developers = function(req, res) {
    Developers.find({}, function(err, developers) {
    if (err)
      res.send(err);
    res.json(developers);
  });
};
