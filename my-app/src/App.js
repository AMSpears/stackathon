import React from 'react';
import './App.css';
import MapView from './map/MapView'
import Sidebar from './sidebar/sidebar'

function App() {
  return (
    <div className = 'app-container'>
      <Sidebar/>
      <MapView/>
    </div>
  );
}

export default App;
