// import React from "react";
import React, { useContext } from "react";
import Card from "./Card";
import { context } from "../context";

function Cards() {
  const { users } = useContext(context);
  return (
    <div>
      {/* Mapping over the users that were set in context via the users.json file. For each user a new Card component is created */}
      {users.map((user) => (
        <Card key={user.id} users={user} />
      ))}
    </div>
  );
}

export default Cards;
