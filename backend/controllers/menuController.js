const MenuItem = require('../models/MenuItem');

// Obtener el menú
exports.getMenu = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Agregar un nuevo producto
exports.addMenuItem = async (req, res) => {
  const { numero, producto, descripcion, precio, cantidad, disponibilidad } = req.body;

  const menuItem = new MenuItem({
    numero,
    producto,
    descripcion,
    precio,
    cantidad,
    disponibilidad
  });

  try {
    const newMenuItem = await menuItem.save();
    res.status(201).json(newMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
