import React ,{useContext}  from 'react';
import {GlobalContext} from '../Context/MainState'
import '../css/history.css'

const TransList = ({transactions}) => {

  const {deleteTransaction} = useContext(GlobalContext);

  console.log(transactions)


  const symbol = transactions.amount < 0 ? '-' : '+';

  return (
    <li className= {transactions.amount < 0 ? 'neg' : 'pos'}>
      {transactions.text}
      <span>{symbol}${Math.abs(transactions.amount)} </span>
      <button className= "del-but" onClick= {() => deleteTransaction(transactions.id)}>x</button>
    </li>
  )
}

export default TransList