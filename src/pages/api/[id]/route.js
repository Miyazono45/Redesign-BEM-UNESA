import News from "../../../../models/News";
import connect from "../../../../backend";
import { NextApiResponse } from "next";

export default async function GET (req, params){
      const id = params;
      await connect();
     const topic = await News.findOne({_id: id});
      NextApiResponse.status(200).json(JSON.stringify(topic));
    }