import React from "react";
import GoogleMapReact from 'google-map-react';

function App() {
  return (
    <div style={{height: '100vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY}}
        defaultCenter={{lat: 52.1935161702226, lng: 20.9304286193486}}
        defaultZoom={10}
      >
      </GoogleMapReact>
    </div>
  );
}

export default App;
