import React from 'react';
import './App.css';
import Header from './Components/header'
import Balance from  './Components/balance'
import History from './Components/history'
import NewTransaction from './Components/newTransaction'

function App() {
  return (
    <div className= "App">
      <Header />
      <div className= "container">
        <Balance />
        <History />
        <NewTransaction />
      </div>
    </div>
  );
}

export default App;
