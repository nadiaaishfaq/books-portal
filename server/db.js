import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const dbString = process.env.DB_CONNECTION;

mongoose.set("strictQuery", true);

const dbConnection = () => {
  mongoose
    .connect(dbString)
    .then(() => console.log("CONNECTED!"))
    .catch(() => console.log("NOT CONNECTED"));
};

export default dbConnection;