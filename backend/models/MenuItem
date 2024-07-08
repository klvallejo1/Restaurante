const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  numero: {
    type: Number,
    required: true,
    unique: true,
  },
  producto: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  disponibilidad: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
