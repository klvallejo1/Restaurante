const Waiter = require('../models/Mesero');

exports.createWaiter = async (req, res) => {
  try {
    const newWaiter = new Waiter({
      name: req.body.name
    });

    const savedWaiter = await newWaiter.save();
    res.status(201).json(savedWaiter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getWaiters = async (req, res) => {
  try {
    const waiters = await Waiter.find({}, 'name');
    res.status(200).json(waiters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};