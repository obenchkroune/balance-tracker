import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const initialState = {
  transactions: [
    { id: 1, title: "Flower", ammount: -20 },
    { id: 2, title: "Salary", ammount: 300 },
    { id: 3, title: "Book", ammount: -10 },
    { id: 4, title: "Camera", ammount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
