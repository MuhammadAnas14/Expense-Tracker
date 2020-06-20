import React from 'react';
import './App.css';
import Header from './Components/header'
import Balance from  './Components/balance'
import History from './Components/history'
import NewTransaction from './Components/newTransaction'
import { GlobalProvider } from './Context/MainState';


function App() {
  return (
    <div className = "App">
    <GlobalProvider>
      <Header />
        <div className= "container">
        <Balance />
        <History />
        <NewTransaction />
        </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
