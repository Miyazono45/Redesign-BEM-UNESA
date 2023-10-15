import mongoose from "mongoose";

export const connect = async ()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected");
  }catch(error){
    throw new Error(error.message);
  }
}

export default connect;