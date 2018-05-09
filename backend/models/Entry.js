let mongoose = require('mongoose');

let EntrySchema = new mongoose.Schema({
  description:String,
  created:Date,
  img: String,
  author: String
  
});	

EntrySchema.pre('remove', function (next) {
    this.model('Challenge').update({}, 
      { $pull: { entries: this._id } }, 
      { safe: true, multi: true }, next);
  })

mongoose.model('Entry', EntrySchema);