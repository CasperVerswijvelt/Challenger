let mongoose = require('mongoose');

const lengthBetween = (val, min, max) => val.length >= min && val.length <= max;

let ChallengeSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: val => lengthBetween(val, 4,40),
      message: "Name must be 4 - 40 characters long"
    },
  },
  description:{
    type: String,
    validate: {
      validator: val => lengthBetween(val, 20,1000),
      message: "Description must be 20 - 1000 characters long"
    },
  },
  created:Date,
  author: {type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'},
  entries: [{type: mongoose.Schema.Types.ObjectId, 
    ref: 'Entry'}],
  
});	
mongoose.model('Challenge', ChallengeSchema);