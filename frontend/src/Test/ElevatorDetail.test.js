import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ElevatorDetail from '../components/ElevatorDetail';

describe('ElevatorDetail Component', () => {
  const mockElevator = {
    fabricationNumber: '12345',
    address: '123 Main St',
    floorNumber: 10,
    deviceIdentificationNumber: 'DIN123',
    manufacturerName: 'Elevators Inc.',
    productionYear: '2020',
    elevatorType: 'Freight',
    state: 'Operational',
    chart: { data: [] } // Assuming empty chart data
  };

  test('renders elevator details', () => {
    render(<ElevatorDetail elevator={mockElevator} />);

    expect(screen.getByText('Fabrication Number: 12345')).toBeInTheDocument();
    expect(screen.getByText('Address: 123 Main St')).toBeInTheDocument();
    // Add more assertions as needed for other details
  });

  test('renders no chart data message', () => {
    render(<ElevatorDetail elevator={mockElevator} />);

    expect(screen.getByText('No chart data available.')).toBeInTheDocument();
  });

});
