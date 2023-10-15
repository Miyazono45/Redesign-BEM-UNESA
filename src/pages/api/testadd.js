import mongoose from "mongoose";
import connect from "../../../backend/index";
import News from "../../../models/News";
/**
 * @param {import("next").NextApiRequest}req
 *  @param {import("next").NextApiResponse}res
 */

export default async function testadd(req,res){
    const {title,description} = req.body;

    console.log("connecting");
    await connect();
    console.log("connected to db");

    console.log("creating document");
    const test = await News.create(req.body)
    console.log('created documents');

    res.json({test});
}