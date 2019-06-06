import React from 'react';
import './App.css';
import ToggleButton from './components/ToggleButton/ToggleButton'
import ToggleButton2 from './components/ToggleButton2/ToggleButton2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleButton></ToggleButton>
        <ToggleButton2></ToggleButton2>
      </header>
    </div>
  );
}

export default App;
