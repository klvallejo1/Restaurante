const Order = require('../models/Pedido');
const MenuItem = require('../models/MenuItem');

exports.createOrder = async (req, res) => {
    try {
        const { producto, cantidad, mesa } = req.body;

        // Verificar si el producto existe y tiene suficiente cantidad
        const menuItem = await MenuItem.findOne({ producto: producto });
        if (!menuItem) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        if (menuItem.cantidad < cantidad) {
            return res.status(400).json({ message: 'Cantidad insuficiente' });
        }

        // Crear el pedido
        const order = new Order({
            producto,
            cantidad,
            mesa,
        });

        // Guardar el pedido
        await order.save();

        // Actualizar la cantidad del producto en el menú
        menuItem.cantidad -= cantidad;
        await menuItem.save();

        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};