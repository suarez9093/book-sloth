// import React from "react";
import React, { useContext } from "react";
import Card from "./Card";
import { context } from "../context";

function Cards() {
  const { users, replies } = useContext(context);
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} users={user} replies={replies} />
      ))}
    </div>
  );
}

export default Cards;
