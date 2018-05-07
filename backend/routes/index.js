var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Challenge = mongoose.model('Challenge');
let Entry = mongoose.model('Entry');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('server works');
});


router.get('/API/challenges/', function (req, res, next) {
  let query = Challenge.find().populate('entries');
  query.exec(function (err, challenges) {
    if (err) { return next(err); }
    res.json(challenges);
  });
});

router.post('/API/challenges/', function (req, res, next) {
  Entry.create(req.body.entries, function (err, entr) {
    if (err) {
      return next(err);
    }

    let chal = new Challenge({
      name: req.body.name,
      description: req.body.description,
      created: req.body.created
    });


    chal.save(function (err, ch) {
      if(err) {
        return next(err);
      }
      res.json(ch);
    });

  })
});



router.param('challenge', function (req, res, next, id) {
  let query = Challenge.findById(id);
  query.exec(function (err, challenge) {
    if (err) { return next(err); }
    if (!challenge) { return next(new Error('not found ' + id)); }
    req.challenge = challenge;
    return next();
  });
});

router.get('/API/challenge/:challenge', function (req, res, next) {
  res.json(req.challenge);
});

router.post('/API/challenge/:challenge/entries', 
  function(req, res, next) {
  let entr = new Entry(req.body);

  entr.save(function(err, entry) {
    if (err) return next(err);

    req.challenge.entries.push(entry);
    req.challenge.save(function(err, rec) {
      if (err) {
        Challenge.remove({_id: entr._id})
        return next(err);
      }
      
      res.json(entry);
    })
  });
});


router.delete('/API/challenge/:challenge', function(req, res) {
  Challenge.remove({ _id: {$in: req.challenge.entries }}, 
    function (err) {
      if (err) return next(err);
      req.challenge.remove(function(err) {
        if (err) { return next(err); }   
        res.json(req.challenge);
      });
    })
})

router.put('/API/challenge/:challenge', function (req, res, next) {
  req.challenge.save(function (err) {
    if (err) { return next(err); }
    res.json("updated challenge");
  });
})

module.exports = router;
