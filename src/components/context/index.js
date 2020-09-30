import React, { useState } from "react";
import usersData from "../../users.json";
// Context provides a way to share values between components without having to pass them via props
const context = React.createContext();

function ContextProvider({ children }) {
  const [users, setUsers] = useState(usersData);

  return (
    // Provider allows consuming components to subscribe to context changes
    <context.Provider
      // All consumers that are decenants of Provider will re-render whenever the value prop changes
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
