const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  visibility: {
    type: String,
    default: 'private'
  },
  prompt_details: {
    type: String,
    required: true
  },
  cloudinary_id:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Image', imageSchema)