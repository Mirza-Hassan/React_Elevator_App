// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const elevatorRoutes = require('./routes/elevatorRoutes');

// Use the routes
app.use('/api/users', userRoutes);
app.use('/api/elevators', elevatorRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
