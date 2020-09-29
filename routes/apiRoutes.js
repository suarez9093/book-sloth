const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

router.get("/", (req, res) => {
  const users = "SELECT * FROM User";
  connection.query(users, (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});
router.post("/", (req, res) => {
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
module.exports = router;
