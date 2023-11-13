const request = require('supertest');
const express = require('express');
const UserRouter = require('../routes/userRoutes');
const User = require('../models/User');

jest.mock('../models/User');

const app = express();
app.use(express.json());
app.use('/api/users', UserRouter);

describe('POST /api/users', () => {
  it('creates a new user successfully', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    User.mockImplementation(() => ({ save: jest.fn().mockResolvedValue(userData) }));

    const response = await request(app).post('/api/users').send(userData);

    expect(response.statusCode).toBe(201);
    expect(response.text).toBe('User created successfully');
  });
});
