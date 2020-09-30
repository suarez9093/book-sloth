import React, { useState } from "react";
import usersData from "../../users.json";
const context = React.createContext();

function ContextProvider({ children }) {
  const [users, setUsers] = useState(usersData);

  return (
    <context.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </context.Provider>
  );
}

export { ContextProvider, context };
