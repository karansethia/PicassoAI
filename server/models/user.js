const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
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
  }],
  refreshToken: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);