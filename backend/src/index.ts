import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB()
  .then(() => console.log("Server connected at port:", PORT))
  .catch((error) => console.log("Error ", error));
