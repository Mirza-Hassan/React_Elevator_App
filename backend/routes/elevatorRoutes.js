const express = require('express');
const router = express.Router();
const Elevator = require('../models/Elevator');

// Save all elevators
router.post('/saveElevators', async (req, res) => {
  try {
    const elevatorsData = req.body.allElevators;
    for (const elevatorData of elevatorsData) {
      const exists = await Elevator.findOne({ fabricationNumber: elevatorData.fabricationNumber });
      if (!exists) {
        const elevator = new Elevator(elevatorData);
        await elevator.save();
      }
    }
    res.status(200).send({ message: 'Elevators data saved successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error saving data', error });
  }
});

// Get all elevators
router.get('/', async (req, res) => {
  try {
    const allElevators = await Elevator.find({});
    res.json(allElevators);
  } catch (error) {
    res.status(500).send('Server error', error);
  }
});

// Get counts of operational, warning, and out-of-service elevators
router.get('/counts', async (req, res) => {
  try {
    const operationalCount = await Elevator.countDocuments({ state: 'operational' });
    const warningCount = await Elevator.countDocuments({ state: 'warning' });
    const outOfServiceCount = await Elevator.countDocuments({ state: 'out-of-order' });
    res.json({ operationalCount, warningCount, outOfServiceCount });
  } catch (error) {
    res.status(500).send('Server error', error);
  }
});

module.exports = router;
