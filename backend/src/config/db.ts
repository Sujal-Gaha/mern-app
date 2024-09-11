import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  try {
    if (!MONGO_URI) {
      throw new Error("The .env file doesnot have the mongo uri");
    }

    console.log("Connecting...");

    await mongoose.connect(MONGO_URI);

    console.log("Connected to the database");
  } catch (error) {
    console.log(
      "Something went wrong while connecting to the database ",
      error
    );
    process.exit(1);
  }
};

export default connectDB;
