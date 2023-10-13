import { NextResponse } from "next/server";
import connect from "../../../backend/index";
import News from "../../../models/News";

export default async function GET(req,res){
    try{
        await connect();
        res.status(200).send({msg:"fetch succesfull"})
    }catch(err){
        res.status(400).send({err,msg:"cant fetch"})
    }
}
