import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time)

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time)
  }

  setInterval(updateTime, 1000)
  
  return (
    <div className="App">
      <h1>{ctime}</h1>
    </div>
  );
}

export default App;
