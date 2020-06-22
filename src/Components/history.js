import React,{useContext}from 'react'

import TransList from './historyList'
import {GlobalContext} from '../Context/MainState'
import '../css/history.css'


const Header = props =>{

  const {transaction} = useContext(GlobalContext)
  
  
  return (
    <div>
      <h3 className = "history">
        History
      </h3>
      <ul className= "entries">
        {transaction.map(transactions => (
          <TransList key = {transactions.id} transactions= {transactions} />
        ))}
      </ul>
    </div>
  )
}

export default Header