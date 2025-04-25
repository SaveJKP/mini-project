import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./route.js";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;
//connect to mongodb by using mongoose
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }
})();

app.use("/", routes());

app.listen(port, () => {
  console.log(`Server is running on port ${port} ✅`);
});
