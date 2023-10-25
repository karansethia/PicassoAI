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
    required: true
  },
  prompt_details: {
    type: String,
    required: true
  },
  cludinary_id:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Image', imageSchema)