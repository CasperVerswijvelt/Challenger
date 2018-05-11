let mongoose = require('mongoose');
let Challenge = mongoose.model('Challenge');
let Entry = mongoose.model('Entry');
let User = mongoose.model('User');


var express = require('express');
var router = express.Router();

/*authenticatie*/
let jwt = require('express-jwt');
let auth = jwt({
  secret: process.env.CHALLENGER_BACKEND_SECRET
});



/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('server works');
});


router.get('/challenges/', function (req, res, next) {
  let query = Challenge.find()
    .populate({
      path: 'author',
      select: 'username _id'
    })
    .populate({
      path: 'entries',
      populate: {
        path: 'author',
        select: 'username'
      }
    })
  query.exec(function (err, challenges) {
    if (err) {
      return next(err);
    }
    res.json(challenges);
  });
});

router.post('/challenges/', auth, function (req, res, next) {
  Entry.create(req.body.entries, function (err, entr) {
    if (err) {
      return next(err);
    }
    let chal = new Challenge(req.body);
    chal.author = req.user._id;
    chal.created = new Date();
    chal.save(function (err, ch) {
      if (err) {
        return next(err);
      }
      res.json(ch);
    });

  })
});



router.param('challenge', function (req, res, next, id) {
  let query = Challenge.findById(id)
    .populate({
      path: 'author',
      select: 'username _id'
    })
    .populate({
      path: 'entries',
      populate: {
        path: 'author',
        select: 'username'
      }
    });
  query.exec(function (err, challenge) {
    if (err) {
      return next(err);
    }
    if (!challenge) {
      return next(new Error('not found ' + id));
    }
    req.challenge = challenge;
    return next();
  });
});

router.param('entry', function (req, res, next, id) {
  let query = Entry.findById(id).populate({
    path: 'author',
    select: 'username _id'
  });

  query.exec(function (err, entry) {
    if (err) {
      return next(err);
    }
    if (!entry) {
      return next(new Error('not found ' + id));
    }
    req.entry = entry;

    return next();
  });
});

router.get('/challenge/:challenge', function (req, res, next) {
  res.json(req.challenge);
});

router.param('user', function (req, res, next, id) {
  let query = User.find().where('username', id).findOne();
  query.exec(function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(new Error('User not found ' + id));
    }
    req.user = user;

    return next();
  });
});

router.get('/profile/:user', function (req, res, next) {
  let user = {
    username: req.user.username,
    id: req.user._id,
    joined: req.user.joined,
    activity: new Array()
  };
  let query = Challenge.find().populate({
    path: 'entries',
    select: 'id'
  });
  query.where('author', user.id);
  query.exec(function (err, challenges) {
    if (err) {
      return next(err);
    }
    if (!challenges) {
      return next(new Error('No challenges found for user ' + id));
    }
    allChallenges = challenges;
    challenges.forEach(activity => {
      activity = {
        activity
      };
      activity.type = "challenge";
      user.activity.push(activity);
    });

    let query = Entry.find();
    query.where('author', user.id);
    query.exec(function (err, entries) {
      if (err) {
        return next(err);
      }
      if (!entries) {
        return next(new Error('No entries found for user ' + id));
      }

      Challenge.find().populate({
        path: 'entries',
        select: 'id'
      }).exec(function (err, challenges) {
        entries.forEach(activity => {

          let challengeParent = challenges.filter(chal =>
            chal.entries.filter(entry => entry._id.equals(activity.id)).length > 0
          )[0]

          activity = {
            activity
          };
          activity.type = "entry";
          if (challengeParent) {
            activity.challenge = {
              name: challengeParent.name,
              id: challengeParent._id
            }
          }

          user.activity.push(activity);

        });
        user.activity = user.activity.sort((o1, o2) => new Date(o2.activity.created) - new Date(o1.activity.created));
        res.json(user);
      })

    });



  });




});

router.post('/challenge/:challenge/entries', auth,
  function (req, res, next) {
    let entr = new Entry(req.body);
    entr.author = req.user._id;
    entr.created = new Date();

    entr.save(function (err, entry) {
      if (err) return next(err);
      req.challenge.entries.push(entry);
      req.challenge.save(function (err, rec) {
        if (err) {
          Challenge.remove({
            _id: entr._id
          })
          return next(err);
        }

        //Challenge opnieuw ophalen, bug waardoor de toegoevoegde entry enkel zijn id teruggegeven wordt
        let query = Challenge.findById(req.challenge.id)
          .populate({
            path: 'author',
            select: 'username'
          })
          .populate({
            path: 'entries',
            populate: {
              path: 'author',
              select: 'username'
            }
          })
        query.exec(function (err, challenges) {
          if (err) {
            return next(err);
          }
          res.json(challenges);
        });

      })
    });
  });


router.delete('/challenge/:challenge', auth, function (req, res) {
  if (req.challenge.author._id.equals(req.user._id)) {
    Challenge.findByIdAndRemove(req.challenge._id, (err, todo) => {
      if (err) return res.status(500).send(err);
      res.json(req.challenge);
    });
  } else
    res.json("Authenticated user not owner of this challenge")

})



router.delete('/entry/:entry', auth, function (req, res) {
  if (req.entry.author._id.equals(req.user._id)) {
    Entry.findByIdAndRemove(req.entry._id, (err, todo) => {
      if (err) return res.status(500).send(err);
      res.json(req.entry);
    });
  } else
    res.json("Authenticated user not owner of this entry")

})



router.put('/challenge/:challenge', function (req, res, next) {
  req.challenge.save(function (err) {
    if (err) {
      return next(err);
    }
    res.json("updated challenge");
  });
})

module.exports = router;
