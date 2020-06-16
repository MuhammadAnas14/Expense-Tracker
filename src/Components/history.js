import React from 'react'
import '../css/history.css'

const Header = props =>{
  return (
    <div>
      <h3 className = "history">
        History
      </h3>
      <ul className= "entries">
        <li className= "pls">
          dddd
          <span>sss</span>
          <button className= "del-but">x</button>
        </li>
      </ul>
    </div>
  )
}

export default Header