import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";
import cors from "cors";
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
app.use("/auth", authRoute);
app.use("/product", productRoute);

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("My Database is connected");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
