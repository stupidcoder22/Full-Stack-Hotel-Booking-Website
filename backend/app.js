import express from "express";
import connection from "./db/connection";
const app = express();
connection();

app.listen(1000, () => {
  console.log("Server is listening at 1000");
});
