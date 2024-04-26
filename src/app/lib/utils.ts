import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO as string);
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};
