const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

//CORS for specific origins
app.use(cors({
  origin: ['http://localhost:3000'], 
  methods: 'GET', 
  credentials: true, 
}));

// API route
app.get('/getTollData', async (req, res) => {
  try {
     //const { origin= "New York ,NY,", destination = "Philadelphia , Pennsylvania,",serviceProvider = "here", vehicle = "2AxlesTaxi" } = req.body;

    const response = await axios.post(
      'https://apis.tollguru.com/toll/v2/origin-destination-waypoints',
      {
        "from": {
          "address": origin,
          // "lat": 39.95209,
          // "lng": -75.16219
        },
        "to": {
          "address": "Philadelphia , Pennsylvania,",
          // "lat": 40.71455,
          // "lng": -74.00715
        },
        "waypoints": [
          // {
          //   "address": "Bridgewater Township , New Jersey"
          // }
        ],
        "serviceProvider": 'here',
        "vehicle": {
          "type": "2AxlesTaxi",
          "weight": {
            "value": 20000,
            "unit": "pound"
          },
          "height": {
            "value": 7.5,
            "unit": "meter"
          },
          "length": {
            "value": 7.5,
            "unit": "meter"
          },
          "axles": 4,
          "emissionClass": "euro_5"
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '6j6jjJLtN7QHJ2NPh3n2p4fQ9P4n3Hmt', 
        },
      }
    );
    console.log(response.data);
    res.json(response.data); // Send the data back to the client
  } catch (error) {
    console.error('Error fetching toll data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
