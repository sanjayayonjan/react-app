import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h4>Learn Tcaer</h4>
      <Greet/>
      <Welcome />
    </div>
  );
}

export default App;
