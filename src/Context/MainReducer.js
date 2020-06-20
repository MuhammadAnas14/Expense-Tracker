

export default (state,action) => {

  switch(action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transaction: [action.payload, ...state.transaction]
      }
    case 'DELETE_TRANSACTION':
      return{
        ...state,
        transactions:[state.transaction.filter(transactions => transactions.id !== action.payload)]
      }
    default:
      return state; 
  }
}