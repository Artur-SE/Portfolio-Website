import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Hello">{children}</AppContext.Provider>;
};

export const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
