const request = require('supertest');
const express = require('express');
const ElevatorRouter = require('../routes/elevatorRoutes');
const Elevator = require('../models/Elevator');

jest.mock('../models/Elevator');

const app = express();
app.use(express.json());
app.use('/api/elevators', ElevatorRouter);

describe('POST /saveElevators', () => {
  it('should save new elevator data', async () => {
    const newElevatorData = { fabricationNumber: '123' };
    Elevator.findOne.mockResolvedValue(null);
    Elevator.prototype.save = jest.fn().mockResolvedValue(true);

    const response = await request(app).post('/api/elevators/saveElevators').send({ allElevators: [newElevatorData] });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Elevators data saved successfully');
  });
});
