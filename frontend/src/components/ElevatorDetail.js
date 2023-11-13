import React from 'react';
import ElevatorChart from './ElevatorChart';
import '../styles/ElevatorDetail.css'; // Import the CSS file

const ElevatorDetail = ({ elevator }) => {
  return (
    <div className="elevator-detail-container">
      <h2 className="elevator-detail-title">Elevator Detail</h2>
      <p className="elevator-detail-info">Fabrication Number: {elevator.fabricationNumber}</p>
      <p className="elevator-detail-info">Address: {elevator.address}</p>
      <p className="elevator-detail-info">Floor Number: {elevator.floorNumber}</p>
      <p className="elevator-detail-info">Device Identification Number: {elevator.deviceIdentificationNumber}</p>
      <p className="elevator-detail-info">Manufacturer Name: {elevator.manufacturerName}</p>
      <p className="elevator-detail-info">Production Year: {elevator.productionYear}</p>
      <p className="elevator-detail-info">Elevator Type: {elevator.elevatorType}</p>
      <p className="elevator-detail-info">Status: {elevator.state}</p>
      <h3 className="elevator-operational-chart-title">Operational Chart</h3>
      {elevator.chart && elevator.chart.data.length > 0 ? (
        <ElevatorChart chartData={elevator.chart.data} />
      ) : (
        <p>No chart data available.</p>
      )}
    </div>
  );
};

export default ElevatorDetail;
