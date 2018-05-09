let mongoose = require('mongoose');

let ChallengeSchema = new mongoose.Schema({
  name:String,
  description:String,
  created:Date,
  author: {type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'},
  entries: [{type: mongoose.Schema.Types.ObjectId, 
    ref: 'Entry'}],
  
});	
mongoose.model('Challenge', ChallengeSchema);