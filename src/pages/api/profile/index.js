import Connect from "../../../../backend";
import Profile from "../../../../models/Profile";

export default async function GET(req, res) {
  await Connect();
  const topics = await Profile.find();
  res.status(200).json(topics);

  // await Connect();
  // console.log("connected");
  // const profile = await Profile.find();
  // console.log("Data fetched:", profile);
  // return res.status(200).json(JSON.parse(JSON.stringify(profile)));

  // try {

  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
}
