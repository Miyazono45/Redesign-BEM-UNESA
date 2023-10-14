
import connect from "../../../backend/index";
import News from "../../../models/News";

export default async function handler(req,res){
    const { method } = req;
    await connect();

    switch(method){
        case 'GET':
            try {
                const news = await News.find({});
                res.status(200).json({succes: true, data: news});
            }catch(error){
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: fasle});
            break;
    }
}