import mongoose from "mongoose";

const url = "mongodb://localhost:27017/BookingApp";
const connection = async () => {
  const mongo = await mongoose.connect(url);
  if (mongo) {
    console.log("database is connected");
  } else {
    console.log("database is not connected");
  }
};

export default connection;
