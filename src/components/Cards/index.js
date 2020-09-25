import React from "react";
// import React, { useEffect, useContext } from "react";
import Card from "./Card";
import "./cards.css";
// import { context } from "../context/index";
import users from "../../users.json";
import replies from "../../replies.json";

function Cards() {
  // const { users, setUsers } = useContext(context);

  // useEffect(() => {
  //   getUsers();
  // }, []);
  // const getUsers = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3001/users");
  //     const data = await response.json();
  //     setUsers(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div>
      {/* {users && (
        <>
          {users.users.map((user) => (
            <Card
              key={user.id}
              users={users}
              message={user.message}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
              photo={user.photo}
            />
          ))}
        </>
      )} */}

      {users && (
        <>
          {users.map((user) => (
            <Card
              id={user.id}
              replies={replies}
              key={user.id}
              users={users}
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
