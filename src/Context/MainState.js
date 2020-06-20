import React, {createContext,useReducer} from 'react'
import MainReducer from './MainReducer'

const initialState = {
  
  transaction : []

}

export const GlobalContext =createContext(initialState);

export const GlobalProvider = ({children}) => {

  const [state,dispatch] = useReducer(MainReducer, initialState);

  function addTransaction(transaction) {

    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider 
      value = {{
        transaction:state.transaction,
        addTransaction,
        deleteTransaction
      }}>
        {children}
    </GlobalContext.Provider>
  )


}