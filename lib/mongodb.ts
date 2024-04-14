import mongoose from "mongoose";

let isConnected = false;

export const mongoDb = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "nosolace_store"
    });
    isConnected = true;
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};
