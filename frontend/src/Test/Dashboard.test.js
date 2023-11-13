import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../components/Dashboard';

// Mocking useAuth0 hook and its return values
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    user: { name: 'Test User' },
    isAuthenticated: true,
    loginWithRedirect: jest.fn(),
    logout: jest.fn(),
  }),
}));

describe('Dashboard Component', () => {
  const dummyElevators = [
    { id: 1, state: 'operational' },
    { id: 2, state: 'warning' },
    // Add more elevator objects as needed
  ];

  test('renders dashboard with operational count when authenticated', () => {
    render(
      <Dashboard 
        allElevators={dummyElevators} 
        elevators={dummyElevators} 
        onElevatorClick={() => {}} 
        selectedElevator={null}
        onStateClick={() => {}}
        selectedState={null} 
      />
    );

    // Check for user greeting
    expect(screen.getByText('Welcome, Test User!')).toBeInTheDocument();

    // Check for operational count
    expect(screen.getByText('Total Operational Elevators: 1')).toBeInTheDocument();
  });

});
