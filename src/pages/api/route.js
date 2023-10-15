import connect from "../../../backend/index";
import News from "../../../models/News";


export default async function handler(req,res) {
  const {method} = req ;
  await connect();
  
  if (method) {
    try {
      // Connect to the DB
      
      //get the data using the model
      const newses = await News.find({});
      res.json(
        {
          message: "Ok",
          data: newses,
        },
        { status: 200 }
      );
    } catch (error) {
      res.json(
        {
          message: "Failed to fetch News",
          error,
        },
        {
          status: 500,
        }
      );
    }
  } else {
    
  }
  
}

