let mongoose = require('mongoose');

let ChallengeSchema = new mongoose.Schema({
  name:String,
  description:String,
  created:Date,
  entries: [{type: mongoose.Schema.Types.ObjectId, 
    ref: 'Entry'}],
});	
mongoose.model('Challenge', ChallengeSchema);