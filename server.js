const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.REACT_APP_HOST,
  user: process.env.REACT_APP_USERNAME,
  password: process.env.REACT_APP_MYSQL_PASSWORD,
  database: process.env.REACT_APP_DATABASE,
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
  connection.query("SELECT * FROM users", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});
