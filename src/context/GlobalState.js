import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

export const initialState = {
    transactions:  JSON.parse(localStorage.getItem('transactions')) === null? [] : JSON.parse(localStorage.getItem('transactions'))
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    setState({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    setState({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}