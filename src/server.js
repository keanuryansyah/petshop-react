const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let host = "localhost";
let user = "kenumy_react1";
let password = "J9XSQqp555Hl";
let database = "kenumy_react1";

const conn = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

conn.connect((error) => {
  if (error) {
    console.log("error bro");
  } else {
    console.log("konek bro!");
  }
});

app.get("/dataCat", (req, res) => {
  let query = "SELECT * FROM allproducts";

  conn.query(query, (error, results) => {
    if (error) {
      console.log("gagal query bro!");
      return;
    }

    res.json(results);
  });
});

app.listen(3001, () => {
  console.log("server is running on port 3001!");
});
