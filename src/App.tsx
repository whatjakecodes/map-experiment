import React, { useEffect } from 'react';
import './App.css';
import { renderMap } from './map/OpenLayersMapFacade';

function App() {

  useEffect(() => {
    renderMap('map-target');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Map Experiment
      </header>
      <div id="map-target"></div>
    </div>
  );
}

export default App;
