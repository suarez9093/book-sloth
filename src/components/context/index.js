import React, { useState } from "react";
const context = React.createContext();

function ContextProvider({ children }) {
  const [users, setUsers] = useState();

  return (
    <context.Provider value={{ users, setUsers }}>{children}</context.Provider>
  );
}

export { ContextProvider, context };
