import React, { useState } from 'react';
import axios from 'axios';

const TollCalculator = () => {
  const [origin, setOrigin] = useState('New York, NY');
  const [destination, setDestination] = useState('Philadelphia, Pennsylvania');
  const [serviceProvider, setServiceProvider] = useState('here');
  const [vehicleType, setVehicleType] = useState('2AxlesTaxi');
  const [tollData, setTollData] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculateToll = () => {
    const requestData = {
      from: {
        address: origin,
      },
      to: {
        address: destination,
      },
      waypoints: [],
      serviceProvider: serviceProvider,
      vehicle: {
        type: vehicleType,
        weight: {
          value: 20000,
          unit: 'pound',
        },
        height: {
          value: 7.5,
          unit: 'meter',
        },
        length: {
          value: 7.5,
          unit: 'meter',
        },
        axles: 4,
        emissionClass: 'euro_5',
      },
    };

    axios.post('http://localhost:3001/getTollData', requestData, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '6j6jjJLtN7QHJ2NPh3n2p4fQ9P4n3Hmt',
      },
    })
      .then(response => {
        setTollData(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching toll data:', error.message);
        setError('Error fetching toll data. Please try again.');
        setTollData(null);
      });
  };

  return (
    <div>
      <div>
        <label>Origin: </label>
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
      </div>
      <div>
        <label>Destination: </label>
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </div>
       <div>
        <label>Vehicle Type: </label>
        <input type="text" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} />
      </div>
      <div>
        <button onClick={handleCalculateToll}>Calculate Toll</button>
      </div>
      {tollData && (
        <div>
          <h2>Toll Data:</h2>
          <pre>{JSON.stringify(tollData, null, 2)}</pre>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TollCalculator;
