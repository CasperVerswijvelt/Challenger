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
  chal.save(function(err, ch) {
    if (err){ return next(err); }
    res.json(ch);
  });
});  

router.param('challenge', function(req, res, next, id) {
  let query = Challenge.findById(id);
  query.exec(function (err, challenge){
    if (err) { return next(err); }
    if (!challenge) { return next(new Error('not found ' + id)); }
    req.challenge = challenge;
    return next();
  });
});

router.get('/API/challenge/:challenge', function(req, res, next) {
  res.json(req.challenge);
});

router.delete('/API/challenge/:challenge', function(req, res, next) {
  req.challenge.remove(function(err) {
    if (err) { return next(err); }   
    res.json("removed challenge");
  });
})

module.exports = router;
