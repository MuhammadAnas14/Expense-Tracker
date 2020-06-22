import React, { useContext,useState } from 'react'
import '../css/newTranactions.css'
import {GlobalContext} from '../Context/MainState'



const NewTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useContext(GlobalContext);

  const Submit = e => {
    e.preventDefault();

    const newTranactions = {
      id : Math.floor(Math.random() * 10),
      text,
      amount : +amount 
    };
    console.log(newTranactions)
    
    addTransaction(newTranactions);
  
}
  return(
    <div>
      <h3 className= "tranactions">New Transactions</h3>
      <form onSubmit= {Submit}> 
        <div className= "form-group">
          <h6>Text</h6>
          <input className = "form-control" type = "text" value = {text} onChange= {(e) => setText(e.target.value)} placeholder= "enter Text" />
        </div>
        <div className= "form-group">
          <h6>Amount</h6>
          <h6>(negative - expense, positive - income)</h6>
          <input className = "form-control" type = "number" value = {amount} onChange= {(e) => setAmount(e.target.value)} placeholder= "enter Amount" />
        </div>
          <button className= "bttn">Income</button>
      </form>
    </div>
  )
}

export default NewTransaction