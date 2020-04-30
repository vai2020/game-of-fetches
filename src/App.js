import React from 'react';
import './App.css';
import JohnSnow from './components/JohnSnow.js';
import MargaeryTyrel from "./components/MargaeryTyrel.js";
import HouseLannister from "./components/HouseLannister.js";
import HouseTargaryen from "./components/HouseTargaryen.js";
import HouseBaratheon from "./components/HouseBaratheon.js";
import RobertBaratheon from "./components/RobertBaratheon.js";
import HouseStark from "./components/HouseStark.js";
import CatelynStark from "./components/CatelynStark.js";

function App() {
  return (
    <div className="App">
      
    <JohnSnow/>
    <MargaeryTyrel/>
    <HouseTargaryen/>
    <HouseLannister/>
    <HouseBaratheon/>
    <RobertBaratheon/>
    <HouseStark/>
    <CatelynStark/>
    
    </div>
  );
}

export default App;
