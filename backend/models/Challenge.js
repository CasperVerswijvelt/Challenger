var mongoose = require('mongoose');

var ChallengeSchema = new mongoose.Schema({
  name:String,
  description:String,
  created:Date,
});	
mongoose.model('Challenge', ChallengeSchema);