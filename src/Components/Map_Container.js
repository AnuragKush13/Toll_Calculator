import { render } from '@testing-library/react';
import {
    MapContainer,
    TileLayer,
    useMap,
    Polyline,
    Marker,
    useMapEvents
  } from 'react-leaflet'
const Map_Container = (decodedPolyline, sourcePos, destinationPos) =>{

    const handleClick = (e) => {
        const { lat, lng } = e.latlng;
        console.log(`You clicked the map at: ${lat}, ${lng}`);
    
        // Use the lat and lng as needed (e.g., update state, perform actions)
      };
    
    console.log("inside maps");
    console.log("sourcepos",sourcePos);

    
    const center = [39.95209, -75.16219];
    // console.log(center);
    const redOptions = { color: 'rgb(41, 118, 118)' }
   
    return(
        <MapContainer center={center} zoom={8} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
           {/* {useMapEvents({
        click: handleClick,
      })} */}
          {decodedPolyline&&(
            
          <Polyline pathOptions={redOptions} positions={decodedPolyline.decodedPolyline} />)}
          <Marker  position={[39.95209, -75.16219]}></Marker>
          <Marker  position={[40.71455, -74.00715]}></Marker>
            {/* {useMapEvents({click:handleClick})} */}
            
        </MapContainer>
      )
};

export default Map_Container;