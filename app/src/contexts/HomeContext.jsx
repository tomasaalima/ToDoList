import React, { createContext, useState } from "react";

const HomeContext = createContext();

function HomeProvider({ children }) {
  const [ list, setList ] = useState([]);
  const [ doned, setDoned ] = useState(0);

  return (
    <HomeContext.Provider value={{list, setList, doned, setDoned}}>
      {children}
    </HomeContext.Provider>
  );
}

export { HomeContext, HomeProvider };