import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import { Auth0Provider } from '@auth0/auth0-react';
import allElevators from './mock/data';

function App() {  
  const [selectedElevator, setSelectedElevator] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [elevators, setElevators] = useState([]);
  const [operationalCount, setOperationalCount] = useState(0);
  const [warningCount, setWarningCount] = useState(0);
  const [outOfServiceCount, setOutOfServiceCount] = useState(0);

  useEffect(() => {
    // Fetch all elevators data
    fetch('http://localhost:3001/api/elevators')
      .then((response) => response.json())
      .then((data) => {
        setElevators(data);
      })
      .catch((error) => {
        // error
      });

    // Fetch counts of operational, warning, and out-of-service elevators
    fetch('http://localhost:3001/api/elevators/counts')
      .then((response) => response.json())
      .then((data) => {
        setOperationalCount(data.operationalCount);
        setWarningCount(data.warningCount);
        setOutOfServiceCount(data.outOfServiceCount);
      })
      .catch((error) => {
        // error
      });
  }, []);

  const handleElevatorClick = (fabricationNumber) => {
    const selected = elevators.find((elevator) => elevator.fabricationNumber === fabricationNumber);
    setSelectedElevator(selected);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
    setSelectedElevator(null);
  };

  return (
    <div className="App">
        <Auth0Provider
          domain="dev-vt76x7tratgk3hs4.us.auth0.com"
          clientId="5Attc1t7i9uTbbozcIQc20m5Qz9bNkR9"
          redirectUri={window.location.origin}
        >
      <Dashboard
        elevators={elevators}
        allElevators={allElevators}
        onElevatorClick={handleElevatorClick}
        selectedElevator={selectedElevator}
        onStateClick={handleStateClick}
        selectedState={selectedState}
        operationalCount={operationalCount}
        warningCount={warningCount}
        outOfServiceCount={outOfServiceCount}
      />
    </Auth0Provider>
    </div>
  );
}

export default App;
