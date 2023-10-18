import Link from "next/link";
import connect from "../../../backend/index";
import Newsdb from "../../../models/News";
import Navbar from "../components/Navbar";
// import beritanew from "../../pages/components/NewsSlide"

export default function Berita({Tests}){
    console.log(Tests);
    return (
        <>
            <Navbar/>
            <h1>
               Halo 
            </h1>
            <div className="pt-[25%]">
            {Tests?.map(t =>(
            
                    <Link key={t._id} href={'/Berita/getBerita/'+t._id} className="">
                        <div className="">
                            <h1>
                                {t.title}
                            </h1>
                        </div>
                    </Link>
            
                ))
            }
            </div>
        </>

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