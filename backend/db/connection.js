import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.MONGO;
const connection = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to database");
  } catch (error) {
    throw error;
  }
};

export default connection;
