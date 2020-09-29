/* Dependencies 
=======================================================
*/
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const users = require("./routes/apiRoutes");

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

/* Starting Server 
=======================================================
*/
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
