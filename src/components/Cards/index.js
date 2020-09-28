// import React from "react";
import React, { useContext } from "react";
import Card from "./Card";
import "./cards.css";
import usersData from "../../users.json";
import replies from "../../replies.json";

function Cards() {
  return (
    <div>
      {usersData.map((user) => (
        <Card key={user.id} users={user} replies={replies} />
      ))}
    </div>
  );
}

export default Cards;
