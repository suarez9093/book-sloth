import React, { useState } from "react";
import usersData from "../../users.json";
const context = React.createContext();

function ContextProvider({ children }) {
  const [users, setUsers] = useState(usersData);
  const { message, first_name, last_name, photo, id, likes } = users;
  const [like, setLike] = useState(likes);

  return (
    <context.Provider
      value={{
        users,
        setUsers,
        message,
        first_name,
        last_name,
        photo,
        id,
        like,
        setLike,
      }}
    >
      {children}
    </context.Provider>
  );
}

export { ContextProvider, context };
