import React, { createContext, useState } from "react";

// create the context
export const ContextApp = createContext();

// create the context provider
export const ContextProvider = ({ children }) => {
  const [inputName, setInputName] = useState("");

  return (
    <ContextApp.Provider value={{ inputName, setInputName }}>
      {children}
    </ContextApp.Provider>
  );
};
