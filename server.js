require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
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
  const users = "SELECT * FROM User";
  connection.query(users, (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});
app.post("/users", (req, res) => {
  const { first_name, last_name, email, photo, message, replies } = req.body;
  const insertQuery = `INSERT INTO USER (first_name, last_name, email, photo, message, replies) VALUES ('${first_name}','${last_name}',"${email}",'${photo}',"${message}", "${
    replies || "[]"
  }");`;

  connection.query(insertQuery, async (err, results, fields) => {
    try {
      if (err) throw err;
      console.log("results", results);
      res.send(results);
    } catch (err) {
      console.log(err);
    }
  });
});
