import { useAuth0 } from '@auth0/auth0-react';
import React, {useEffect} from 'react';
import ElevatorList from './ElevatorList';
import ElevatorDetail from './ElevatorDetail';
import '../styles/Dashboard.css';

const Dashboard = ({ allElevators, elevators, onElevatorClick, selectedElevator, onStateClick, selectedState }) => {
  
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const operationalCount = elevators.filter((elevator) => elevator.state === 'operational').length;
  const warningCount = elevators.filter((elevator) => elevator.state === 'warning').length;
  const outOfServiceCount = elevators.filter((elevator) => elevator.state === 'out-of-order').length;

  const saveAllElevators = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/elevators/saveElevators', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ allElevators }),
      });

      if (response.ok) {
        console.log('Elevators data saved successfully');
      } else {
        // error
      }
    } catch (error) {
      // error
    }
  };

  // useEffect to handle user login
   useEffect(() => {
    const saveUsers = async () => {
      if (isAuthenticated) {
        try {
          const response = await fetch('http://localhost:3001/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: user.name, email: user.email }),
          });

          if (response.ok) {
            saveAllElevators();
            console.log('Login successful');
          } else {
            // Handle error
          }
        } catch (error) {
          // Login error
        }
      }
    };

    saveUsers();
  }, [isAuthenticated, user]);

  // Function to handle login
  const handleLoginClick = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard-container">
      {isAuthenticated ? (
        <>
          <p className="welcome-message">Welcome, {user.name}!</p>
          <button onClick={handleLogout} className="logout-button">Logout</button>
          <h1>Elevator Dashboard</h1>
          <div>
            <div className="status-box" onClick={() => onStateClick('operational')}>
              <div className="status-title">Operational Elevators</div>
              <div className="status-count">{operationalCount}</div>
            </div>
            <div className="status-box" onClick={() => onStateClick('warning')}>
              <div className="status-title">Warning Elevators</div>
              <div className="status-count">{warningCount}</div>
            </div>
            <div className="status-box" onClick={() => onStateClick('out-of-order')}>
              <div className="status-title">Out of Service Elevators</div>
              <div className="status-count">{outOfServiceCount}</div>
            </div>
          </div>
          <div className="elevator-list">
            <ElevatorList
              elevators={selectedState ? elevators.filter((elevator) => elevator.state === selectedState) : elevators}
              onElevatorClick={onElevatorClick}
            />
            {selectedElevator && <ElevatorDetail elevator={selectedElevator} />}
          </div>
        </>
      ) : (
        <>
        <h1>Smart Elevator Maintenance Company</h1>
        <button onClick={handleLoginClick} className="login-button">Log In</button>
        </>
      )}
    </div>
  );
};
export default Dashboard;
