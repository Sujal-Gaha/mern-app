import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { productRouter } from "./routes/product.route";
import { categoryRouter } from "./routes/category.route";
import { userRouter } from "./routes/user.route";
import { wishlistRouter } from "./routes/wishlist.route";

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
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/wishlist", wishlistRouter);
