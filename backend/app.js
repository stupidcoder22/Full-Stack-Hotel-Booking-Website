import cookieParser from "cookie-parser";
import express from "express";
import connection from "./db/connection";
import authrouter from "./routes/auth";
import hotelrouter from "./routes/hotels";
import rooomsrouter from "./routes/rooms";
import usersrouter from "./routes/users";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authrouter);
app.use("/api/hotels", hotelrouter);
app.use("/api/rooms", rooomsrouter);
app.use("/api/users", usersrouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.Message || "Something went wrong buddy";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(1000, () => {
  connection();
  console.log("Server is listening at 1000");
});
