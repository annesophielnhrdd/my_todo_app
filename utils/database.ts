import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongodb is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "task",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (error) {
    console.log(error);
  }
};
