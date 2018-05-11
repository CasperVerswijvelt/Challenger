let mongoose = require('mongoose');

const lengthBetween = (val, min, max) => val.length >= min && val.length <= max;

let EntrySchema = new mongoose.Schema({
  description:  {
    type:String,
    validate: {
      validator: val => lengthBetween(val, 20,200),
      message: "Description must be 20 - 200 characters long"
    }
  },
  created: Date,
  img: {
    type: String,
    validate: {
      validator: val => lengthBetween(val, 4,500),
      message: "Image URL must be 4 - 500 characters long"
    }
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

});

EntrySchema.pre('remove', function (next) {
  this.model('Challenge').update({}, {
    $pull: {
      entries: this._id
    }
  }, {
    safe: true,
    multi: true
  }, next);
})

mongoose.model('Entry', EntrySchema);
