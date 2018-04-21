var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Challenge = mongoose.model('Challenge');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works');
});


router.get('/API/challenges/', function(req, res, next) {
  Challenge.find(function(err, challenges) {
    if (err) { return next(err); }
    res.json(challenges);
  });
});

router.post('/API/challenges/', function (req, res, next) {
  let chal = new Challenge(req.body);
  chal.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});  

module.exports = router;
