import React from 'react';
import './App.css';
import Header from './Components/header'
import Balance from  './Components/balance'
import History from './Components/history'

function App() {
  return (
    <div className= "App">
      <Header />
      <div className= "container">
        <Balance />
        <History />
      </div>
    </div>
  );
}

export default App;
