import React, {useEffect, useRef, useState} from "react";
import GoogleMapReact from 'google-map-react';
import axios from "axios";
import Marker from "./components/Marker/Marker";


function App() {
  const mapRef = useRef();
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);
  const [data, setData] = useState([]);

  useEffect( async () => {
    const result =  await axios.get('https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE');
    setData(result.data.objects)
  },[]);


  return (
    <div style={{height: '100vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY}}
        defaultCenter={{lat: 52.1935161702226, lng: 20.9304286193486}}
        defaultZoom={10}
      >
        {data.map(item => {
          console.log(item);
          return (
            <Marker key={item.platesNumber} lat={item.location.latitude} lng={item.location.longitude}/>
          )
        })}
      </GoogleMapReact>
    </div>
  );
}

export default App;
