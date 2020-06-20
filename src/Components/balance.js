import React, {useContext} from 'react'
import '../css/balance.css'
import {GlobalContext} from '../Context/MainState'


const Balance = () => {
  
  const {transaction} = useContext(GlobalContext);
  
  const amount = transaction.map(transaction => transaction.amount)

  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amount.filter(trans => trans > 0).reduce((trans,item)=> (trans += item), 0 ).toFixed(2)

  const expense = (amount.filter(trans => trans < 0).reduce((trans,item)=> (trans += item), 0 ) * -1).toFixed(2)


  return (
    <div >
      <h4>Your Balance</h4>
      <h1>${total}</h1>
      <div className= "amount">
        <div>
          <h4>Income</h4>
          <p>{income}</p>
        </div>
        <div>
          <h4>Expence</h4>
          <p>{expense}</p>
        </div>
      </div>
    </div>  
  )
}

export default Balance