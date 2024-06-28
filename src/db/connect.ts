import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

export default async function connectToDB() {
  try {
    const connection = await mongoose.connect(uri);
    console.log("Connected to MongoDB", connection.connection.host);
  } catch (error) {
    throw new Error("Error connecting to MongoDB");
  }
}
