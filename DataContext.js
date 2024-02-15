import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
export const MyContext = createContext();

// Step 2: Create a provider component to wrap your app or a part of it
export const MyContextProvider = ({ children }) => {
  const contextValue = "Hello from Context!";
  const[name,setName]=useState("Mandeep");

  return (
    <MyContext.Provider value={{contextValue,name}}>
      {children}
    </MyContext.Provider>
  );
};


