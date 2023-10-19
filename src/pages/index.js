import Navbar from './components/Navbar.js'
import TentangKami from "./components/tentangKami.js";
import Head from "./components/Beranda.js";
import connect from '../../backend/index.js';
import News from '../../models/News.js';
import NewsSlide from '../pages/components/NewsSlide.js'
import Profile from "./components/Profile.js";


import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['cyrillic-ext'] })
export default function tentangKami({Tests}) {

  return (
    <main className={raleway.className}>
      <Navbar />
      <Head />
      <TentangKami />
      {/* <TentangKami /> */}
      {/* <TentangKami /> */}
      <NewsSlide news={Tests}/>
      {/* <Profile /> */}
    </main>
  )
}

export const getStaticProps = async()=>{
  try{
      console.log("connecting");
      await connect();
      console.log("connected DB");

      console.log("fetching Document");
      const Tests = await News.find();
      const get = await News.findById();
      console.log("fetched succesful");

      return {
          props: {
              Tests: JSON.parse(JSON.stringify(Tests)), 
              get: JSON.parse(JSON.stringify(get)),
          },
      };

  }catch(error){
      console.log(error);
      return{
          notFound: true,
      }
  }
}