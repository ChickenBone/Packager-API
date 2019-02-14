'use strict';
var fs = require('fs');
var Devs = require('../public/developers/developers.json')

exports.list_all_developers = function(req, res) {
  res.json(Devs);

};
exports.list_all_dev_tweaks= function(req, res) {
  let dev = req.params.devName;
  let tweaks = require('../public/developers/'+dev+'/tweaks.json')
  res.json(tweaks);
};
exports.list_tweak= function(req, res) {
  let dev = req.params.devName;
  let tweak = req.params.tweakName;
  let tweaks = require('../public/developers/'+dev+'/'+tweak+"/tweak.json")
  res.json(tweaks);
};
