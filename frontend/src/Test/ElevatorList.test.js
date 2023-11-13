import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ElevatorList from '../components/ElevatorList';

describe('ElevatorList Component', () => {
  const mockElevators = [
    { id: 1, fabricationNumber: 'FN1', state: 'operational', chart: { data: [{ time: new Date().toISOString() }] } },
    { id: 2, fabricationNumber: 'FN2', state: 'warning', chart: { data: [{ time: new Date().toISOString() }] } },
    // Add more mock elevator objects as necessary
  ];

  test('renders list of elevators', () => {
    render(<ElevatorList elevators={mockElevators} onElevatorClick={() => {}} />);

    // Check for the presence of each elevator in the list
    expect(screen.getByText(/FN1 - operational - Latest Time:/)).toBeInTheDocument();
    expect(screen.getByText(/FN2 - warning - Latest Time:/)).toBeInTheDocument();
    // Add more assertions as needed
  });

});
