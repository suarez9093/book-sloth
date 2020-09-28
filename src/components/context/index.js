import React, { useState } from "react";
import usersData from "../../users.json";
import repliesData from "../../replies.json";
const context = React.createContext();

function ContextProvider({ children }) {
  const [users, setUsers] = useState(usersData);
  const [replies, setReplies] = useState(repliesData);

  return (
    <context.Provider value={{ users, setUsers, replies, setReplies }}>
      {children}
    </context.Provider>
  );
}

export { ContextProvider, context };
