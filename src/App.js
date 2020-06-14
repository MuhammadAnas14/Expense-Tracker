import React from 'react';
import './App.css';
import Header from './Components/header'
import Balance from  './Components/balance'

function App() {
  return (
    <div className= "App">
      <Header />
      <div className= "container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
