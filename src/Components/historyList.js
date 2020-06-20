import React ,{useContext}  from 'react';
import {GlobalContext} from '../Context/MainState'

const TransList = ({transaction}) => {

  const {deleteTransaction} = useContext{GlobalContext};

  let symbol = ''

  if (transaction.amount < 0){
    symbol= '-'
  }
  else{
    symbol= '+'
  }

  return (
    <li className= "pls">
      {transaction.text}
      <span>{symbol}${Math.abs} </span>
      <button className= "del-but">x</button>
    </li>
  )
}