require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Connected to db");
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

app.get("/users", (req, res) => {
  let data = {};
  const getUsersAndResponses =
    "SELECT * FROM users INNER JOIN Replies ON users.id = Replies.MessageID;";
  const users = "SELECT * FROM users";

  connection.query(getUsersAndResponses, (err, results, fields) => {
    if (err) throw err;
    console.log("users: ", results);
    data.replies = results;
  });
  connection.query(users, (err, results, fields) => {
    if (err) throw err;
    console.log("users: ", results);
    data.users = results;
    res.send(data);
  });
});
