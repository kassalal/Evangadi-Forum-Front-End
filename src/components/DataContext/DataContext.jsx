import React, { createContext, useState } from "react";
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState("");
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
