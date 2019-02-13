
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Name Of Developer'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Twitter: {
    type: String,
    required: 'Twitter Of Developer'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Developers', TaskSchema);