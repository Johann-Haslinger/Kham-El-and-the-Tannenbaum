

import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

const initialState = {};

// rgb(28,114,255
// #03C9D7

export const ContextProvider = ({ children }) => {
  

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);