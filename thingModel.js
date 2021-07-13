var mongoose = require('mongoose');

var thingSchema = mongoose.Schema({
  img: {
    type: File,
    required: true
  },
  answers: {
    type: Array,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

var Thing = module.exports = mongoose.model('thing', thingSchema);

module.exports.get = function (callback, limit) {
  Thing.find(callback).limit(limit);
}