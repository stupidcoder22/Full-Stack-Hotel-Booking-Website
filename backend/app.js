import express from "express";
import connection from "./db/connection";
import authrouter from "./routes/auth";
import hotelrouter from "./routes/hotels";
import rooomsrouter from "./routes/rooms";
import usersrouter from "./routes/users";
const app = express();

app.use("/api/auth", authrouter);
app.use("/api/hotels", hotelrouter);
app.use("/api/rooms", rooomsrouter);
app.use("/api/users", usersrouter);

app.listen(1000, () => {
  connection();
  console.log("Server is listening at 1000");
});
