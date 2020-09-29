/* Dependencies 
=======================================================
*/
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// Connection to database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

/* Routes
=======================================================
*/

// Get
router.get("/", (req, res) => {
  const query = "SELECT * FROM User";
  connection.query(query, async (err, results, fields) => {
    try {
      await results;
      if (err) throw err;
      res.send(results);
    } catch (err) {
      console.error(err);
    }
  });
});
// Post
router.post("/", (req, res) => {
  const { first_name, last_name, email, photo, message, replies } = req.body;
  const query = `INSERT INTO USER (first_name, last_name, email, photo, message, replies) VALUES ('${first_name}','${last_name}',"${email}",'${photo}',"${message}", "${
    replies || "[]"
  }");`;
  connection.query(query, async (err, results, fields) => {
    try {
      await results;
      if (err) throw err;
      res.send(results);
    } catch (err) {
      console.error(err);
    }
  });
});
// Put
router.put("/:id", (req, res) => {
  const { first_name, last_name, email, photo, message } = req.body;
  const query = `UPDATE USER SET first_name="${first_name}",last_name="${last_name}",email="${email}",photo="${photo}",message="${message} "WHERE user_id=${req.params.id}`;
  connection.query(query, async (err, results, fields) => {
    try {
      await results;
      if (err) throw err;
      res.send(results);
    } catch (err) {
      console.error(err);
    }
  });
});
//
router.delete("/:id", (req, res) => {
  const query = `DELETE FROM USER WHERE user_id=${req.params.id}`;
  connection.query(query, async (err, results, fields) => {
    try {
      await results;
      if (err) throw err;
      res.send(results);
    } catch (err) {
      console.error(err);
    }
  });
});
module.exports = router;
