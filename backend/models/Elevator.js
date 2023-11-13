const mongoose = require('../db');

const elevatorSchema = new mongoose.Schema({
  fabricationNumber: String,
  address: String,
  floorNumber: Number,
  deviceIdentificationNumber: String,
  manufacturerName: String,
  productionYear: Number,
  elevatorType: String,
  state: String,
  chart: {
    name: String,
    data: [{
      time: Date,
      door_cycles_count: Number,
      door_openings_count: Number,
      door_closings_count: Number,
      door_closed_count: Number,
      door_opened_count: Number
    }]
  },
  warningMessage: String
});


const Elevator = mongoose.model('Elevator', elevatorSchema);

module.exports = Elevator;
