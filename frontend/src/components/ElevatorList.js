import React from 'react';
import '../styles/ElevatorList.css'; // Adjust the path if necessary

const ElevatorList = ({ elevators, onElevatorClick }) => {

   // Function to format the timestamp in the desired format
   const formatTime = (timestamp) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      timeZone: 'Europe/Berlin',
    };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

  // Function to find the latest time for each elevator
  const getLatestTime = (elevator) => {
    const elevatorData = elevator?.chart?.data || [];
    if (elevatorData.length === 0) {
      return 'N/A';
    }

    const latestTime = elevatorData.reduce((latest, data) => {
      const time = new Date(data.time).getTime();
      return time > latest ? time : latest;
    }, new Date(elevatorData[0].time).getTime());

    return `${formatTime(latestTime)}`;
  };

  // Sort the elevators based on the latest time in ascending order
  const sortedElevators = [...elevators].sort((a, b) => {
    const timeA = getLatestTime(a);
    const timeB = getLatestTime(b);
    return timeB.localeCompare(timeA);
  });

  return (
    <div className="elevator-list-container">
    <h2 className="elevator-list-title">Elevator List</h2>
    <ul className="elevator-list-ul">
      {sortedElevators.map((elevator) => (
        <li key={elevator.id} className="elevator-list-item" onClick={() => onElevatorClick(elevator.fabricationNumber)}>
          {elevator.fabricationNumber} - {elevator.state} - Latest Time: {getLatestTime(elevator)}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ElevatorList;
