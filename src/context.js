import React, { useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { isloading, error, data } = useFetch(`&s=${query}`);
  //   console.log("context - Rendered");
  return (
    <AppContext.Provider value={{ isloading, error, data, setQuery, query }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider };
