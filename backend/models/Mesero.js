const mongoose = require('mongoose');

const waiterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Waiter', waiterSchema);