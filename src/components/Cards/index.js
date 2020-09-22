import React, { useEffect, useContext } from "react";
import Card from "./Card";
import "./cards.css";
import { context } from "../context/index";

function Cards() {
  const { users, setUsers } = useContext(context);
  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {users && (
        <>
          {users.map((user) => (
            <Card
              key={user.id}
              message={user.message}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
              photo={user.photo}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Cards;
