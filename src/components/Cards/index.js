import React, { useEffect, useContext } from "react";
import Card from "./Card";
import { context } from "../context/index";

function Cards() {
  const { users, setUsers } = useContext(context);
  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {users && (
        <>
          {users.map((user) => (
            <Card key={user.id} message={user.message} />
          ))}
        </>
      )}
    </div>
  );
}

export default Cards;
