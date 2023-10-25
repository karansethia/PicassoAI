const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  generatedImages:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  }]
});

module.exports = mongoose.model('User', userSchema);