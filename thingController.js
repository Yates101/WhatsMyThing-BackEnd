Thing = require('./thingModel');

// For index
exports.index = function (req, res) {
  Thing.get(function (err, thing) {
    if (err)
      res.json({
        status: "error",
        message: "err"
      });
    res.json({
      status: "success",
      message: "Got Thing Successfully!",
      data: thing
    });
  });
};

// For creating new thing
exports.add = function(req, res) {
  var thing = new Thing();
  thing.img = req.body.img? req.body.img : thing.img;
  thing.answers = req.thing.answers;

// Save and check error
  thing.save(function (err) {
    if (err)
      res.json(err);

  res.json({
      message: "New Thing Added!",
      data: thing
    });
  });
};

// View Thing
exports.view = function (req, res) {
  Thing.findById(req.params.thing_id, function (err, bio) {
    if (err)
      res.send(err);
    res.json({
      message: 'Thing Details',
      data: thing
    });
  });
};

// Update Thing
exports.update = function (req, res) {
  Thing.findById(req.params.thing_id, function (err, thing) {
    if (err)
      res.send(err);
    thing.img = req.body.img? req.body.img : thing.img;
    thing.answers = req.thing.answers;

// Save and check errors
    thing.save(function (err) {
      if (err)
        res.json(err)

      res.json({
        message: "Thing successfully updated",
        data: thing
      })
    })
  })
}

// Delete Thing
exports.delete = function (req, res) {
  Thing.deleteOne({
      _id: req.params.thing_id
  }, function (err, contact) {
      if (err)
          res.send(err)
      res.json({
          status: "success",
          message: 'Thing Deleted'
      })
  })
}
