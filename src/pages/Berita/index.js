import Link from "next/link";
import connect from "../../../backend/index";
import Newsdb from "../../../models/News";
import Navbar from '../components/Navbar';
import Image from "next/image";
import bgSec from "../../../public/secondary-hero.png"

import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['cyrillic-ext'] })
// import beritanew from "../../pages/components/NewsSlide"

export default function Berita({Tests}){
    console.log(Tests);
    return (    
        <main className={`${raleway.className}`}>
            <Navbar/>
            <div className="pt-[12.5%] flex-col flex justify-center items-center">
                <div className="bg-cover bg-no-repeat pb-[5%]">
                    <h1 className="text-7xl font-bold ">
                       Berita <span className="text-yellow-400">
                                 Terbaru
                       </span>
                    </h1>
                </div>
                
                <div className="flex flex-col m-auto justify-center items-center flex-grow md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
                {Tests?.map(t =>(
            
                        <Link key={t._id} href={'/Berita/getBerita/'+t._id} className="m-2 flex flex-col justify-center items-center bg-[#1F183C] w-72 h-44 lg:w-80 lg:h-56 rounded-xl">
                            <Image
                                src={'/'+t.image}
                                height={150}
                                width={250}
                                alt={t.title} 
                                className="rounded-xl lg:h-44 lg:w-72"   
                            />
                            <div className="">
                                <h1 className="font-semibold text-base text-white">
                                    {t.title}
                                </h1>
                                {/* <p>
                                    {t.createdAt}
                                </p> */}
                            </div>
                        </Link>
            
                    ))
                }
                </div>
            </div>
           
        </main>

    )
}

export const getStaticProps = async()=>{
    try{
        console.log("connecting");
        await connect();
        console.log("connected DB");
  
        console.log("fetching Document");
        const Tests = await Newsdb.find();
        // const get = await Newsdb.findById();
        console.log("fetched succesful");
  
        return {
            props: {
                Tests: JSON.parse(JSON.stringify(Tests)), 
                // get: JSON.parse(JSON.stringify(get)),
            },
        };
  
    }catch(error){
        console.log(error);
        return{
            notFound: true,
        }
    }
  }