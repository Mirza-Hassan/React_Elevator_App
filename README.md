# Smart Elevator Maintenance Company

Description

Build a user-friendly web app for a smart elevator maintenance company. The dashboard displays operational, warning, and out-of-service elevators, along with recently visited ones. Users can click for detailed lists and information about specific elevators.

# Table of Contents

- [Pre Requisites](#pre-requisites)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Unit Testing](#unit-testing)
- [API Documentation](#api-documentation)
- [Database Schema](#database-Schema)
- [Demo Users](#demo-users)
- [Screenshot](#screenshot)
- [App Flow](#app-flow)
- [Live Demo](#live-demo)

# Pre Requisites:

- Frontend: React.js, chart.js
- Authentication: Auth0
- Backend: Node.js, Express.js
- Database: MongoDB
- Testing: React Testing Library, Jest

# Folder Structure
![Folder_Structure](https://github.com/Mirza-Hassan/React_Elevator_App/assets/17096257/ce0b2255-cb0d-465c-9203-48f2cb1abed2)

# Setup Instructions

Clone the repository
- Run `git clone https://github.com/Mirza-Hassan/React_Elevator_App.git` 

1. Navigate to the `frontend` directory and install dependencies: `npm install`

2. Start the development server: ` npm start`

3. In the `backend` directory, install dependencies: `npm install`

4. Launch the backend application: `node server.js`

# Unit Testing

Frontend Testing

1. Install the required testing packages using npm:
```
npm install --save-dev jest
```
2. To run your tests, use Jest by running the following command:
```
npm test
```
![Frontend_testing](https://github.com/Mirza-Hassan/React_Elevator_App/assets/17096257/510644da-db4b-479a-bf38-8d32e5a61878)

Backend Testing

1. Install the required testing packages using npm:

```
npm install --save-dev jest supertest
```
2. To run your tests, use Jest by running the following command:
```
npm test
```
![Backend_testing](https://github.com/Mirza-Hassan/React_Elevator_App/assets/17096257/2ce51a57-b747-434a-ad79-14999e069a30)

# API Documentation

### Save Elevators Data

**Endpoint:** `POST /saveElevators`

**Description:** Save elevator data to the database.

**Request:**
- Body:
  - `allElevators`: Array of elevator data objects.

**Response:**
- Status 200: Elevators data saved successfully.
- Status 500: Error saving data.

### Get All Elevators

**Endpoint:** `GET /`

**Description:** Retrieve all elevators from the database.

**Response:**
- JSON array of elevator objects.

### Get Elevator Counts

**Endpoint:** `GET /counts`

**Description:** Get counts of operational, warning, and out-of-service elevators.

**Response:**
- JSON object with counts:
  - `operationalCount`: Number of operational elevators.
  - `warningCount`: Number of warning elevators.
  - `outOfServiceCount`: Number of out-of-service elevators.

### Create a New User

**Endpoint:** `POST /`

**Description:** Create a new user in the system.

**Request:**
- Body:
  - `name`: User's name.
  - `email`: User's email.

**Response:**
- Status 201: User created successfully.
- Status 500: Error creating user.

# Database Schema

### Elevator Schema

- `fabricationNumber`: String
- `address`: String
- `floorNumber`: Number
- `deviceIdentificationNumber`: String
- `manufacturerName`: String
- `productionYear`: Number
- `elevatorType`: String
- `state`: String
- `chart`:
  - `name`: String
  - `data`:
    - `time`: Date
    - `door_cycles_count`: Number
    - `door_openings_count`: Number
    - `door_closings_count`: Number
    - `door_closed_count`: Number
    - `door_opened_count`: Number
- `warningMessage`: String

### User Schema

- `name`: String (required)
- `email`: String (required, unique)

# Demo Users

Create two independent demo users for testing purposes:

1. **User 1**
   - Email: mha803544@gmail.com (password: I'll share via email)

2. **User 2**
   - Email: mha803544@gmail.com (password: I'll share via email)

# Screenshot

![ss1](https://github.com/Mirza-Hassan/React_Elevator_App/assets/17096257/0d98082a-98c1-4723-8ff3-8a08a93b7bc7)

![ss2](https://github.com/Mirza-Hassan/React_Elevator_App/assets/17096257/639f835f-6ae8-406a-acef-e8d486791966)

# App Flow
[demo.webm](https://github.com/Mirza-Hassan/React_Elevator_App/assets/17096257/84a30126-b3f3-42ae-9715-d3db5edf7b1e)

# Live DEMO

I will share the Live Demo soon. [In-progess] 
