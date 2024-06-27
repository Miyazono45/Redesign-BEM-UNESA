import mongoose from "mongoose";

export const Connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo connected");
  } catch (error) {
    throw new Error(error.message);
  }
};

export default Connect;
