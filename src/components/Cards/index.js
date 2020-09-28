// import React from "react";
import React, { useContext } from "react";
import Card from "./Card";
import { context } from "../context";

function Cards() {
  const { users } = useContext(context);
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} users={user} />
      ))}
    </div>
  );
}

export default Cards;
