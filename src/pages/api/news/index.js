import { NextResponse } from "next/server";
import Connect from "../../../../backend";
import News from "../../../../models/News";
// import { connect } from "mongoose";

export default async function GET(req, res) {
  await Connect();
  const topics = await News.find();
  res.status(200).json(topics);
  // JSON.stringify(topics)
}

// export async function GETID (req, {params}){
//   const {id} = params;
//   await connect();
//  const topic = await News.findOne(params);
//  return res.status(200).json(JSON.stringify(topic));
// }

// import connect from "../../../backend/index";
// import News from "../../../models/News";

// export default async function handler(req,res) {
//   const {method} = req ;
//   await connect();

//   if (method) {
//     try {
//       // Connect to the DB

//       //get the data using the model
//       const newses = await News.find({});
//       res.json(
//         {
//           message: "Ok",
//           data: newses,
//         },
//         { status: 200 }
//       );
//     } catch (error) {
//       res.json(
//         {
//           message: "Failed to fetch News",
//           error,
//         },
//         {
//           status: 500,
//         }
//       );
//     }
//   } else {

//   }

// }
