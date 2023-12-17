import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TollComponent = () => {

   

    const [apiData, setApiData] = useState(null);
    const fetchDataFromApi = async () => {
        try {
            
            console.log(origin);
            const response = await axios.get('http://localhost:3001/getTollData');
            setApiData(response.data);
            console.log('working');
        } catch (error) {
            console.log(error.message);
        }

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

            <button onClick={fetchDataFromApi}>Calculate </button>
            {apiData && (
                <div>
                    <h3>fuelPrice:</h3>
                    <pre>{JSON.stringify(apiData.summary.fuelPrice.value, null, 2)}</pre>
                    <h3>Cheapest:</h3>
                    <pre>{JSON.stringify(apiData.routes[0].summary.diffs.cheapest, null, 2)}</pre>

                    <h3>Fastest:</h3>
                    <pre>{JSON.stringify(apiData.routes[1].summary.diffs.fastest, null, 2)}</pre>
                    <h3>Polyline:</h3>
                    <pre>{JSON.stringify(apiData.routes[0].polyline, null, 2)}</pre>

                    <h3>Polyline:</h3>
                    <pre>{JSON.stringify(apiData.routes[1].polyline, null, 2)}</pre>
                </div>
            )}


        </div>
    );
};

export default TollComponent;
