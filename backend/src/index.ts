import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import productRouter from "./routes/product.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log("Server connected at port:", PORT));
  })
  .catch((error) => console.log("Error ", error));

app.use("/api/v1/product", productRouter);