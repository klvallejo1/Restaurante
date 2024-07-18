const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const menuRoutes = require('./routes/menuRoutes');
const pedidosRouter = require('./routes/pedidos');
const calificacionRoutes = require('./routes/calificacionRoutes');
const meseroRoutes = require('./routes/meseroRoutes');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware para parsear JSON
app.use(express.json());


app.use('/api/', menuRoutes);
app.use('/api/', pedidosRouter);
app.use('/api/', calificacionRoutes);
app.use('/api', meseroRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
