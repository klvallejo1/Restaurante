const mongoose = require('mongoose');

const CalificacionSchema = new mongoose.Schema({
  mesero: {
    type: String
  },
  fecha: {
    type: Date
  },
  calificacion: {
    type: Number
  },
  comentario: {
    type: String
  }
});

module.exports = mongoose.model('Calificacion', CalificacionSchema);
