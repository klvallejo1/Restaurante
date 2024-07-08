const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  producto: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  mesa: {
    type: Number,
    required: true,
    min: 1,
    max: 25,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Pedido', OrderSchema);