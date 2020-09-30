/* Dependencies 
=======================================================
*/
require("dotenv").config();
const winston = require("winston");
const errors = require("./middleware/error");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const users = require("./routes/apiRoutes");

winston.add(new winston.transports.File({ filename: "logfile.log" }));

process.on("uncaughtException", (err) => {
  console.log(err);
  winston.error(err.message, err);
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  winston.error(err.message, err);
  process.exit(1);
});

/* MiddleWare 
=======================================================
*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", users);
app.use(express.static("public"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(errors);

/* Starting Server 
=======================================================
*/
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
