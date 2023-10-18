'use client'
// import connect from "../../../backend/index";
// import News from "../../../models/News";

import Link from "next/link";
import Image from "next/image";

// const  topics  = await getTopic();
export default function slide({news}){
    //  t._id ${encodeURIComponent(t.slug)} // text-3xl md:text-5xl p-6 h-50 w-50  md:p-10 md:w-60 md:h-60
    return(
        // as={'/berita/${t._id}'}
        <div className="flex felx-row justify-center items-center">
            {news?.map(t=> (
            <Link key={t._id} href={'/Berita/getBerita/'+t._id} 
            className="
            flex
            justify-center
            items-center
            bg-orange-200
            drop-shadow-md
            rounded-md
            p-3
            flex-col
            mx-4
            w-28
    ">
                <div className="flex flex-col justify-center items-center
                ">
                    <Image
                        src="/image1.png"
                        height={112}
                        width={85} 
                        className="" alt="logo Berita"
                      />
                    <div >
                        <h2 className="
                           w-50
                           font-semibold 
                        "
                        >{t.title}</h2>
                        {/* <p>{t.description}</p> */}
                    </div>
                </div>
            </Link>
                
               ))}
        </div>
       
    )
}

// export const getServerSideProps = async()=>{
//     try{
//         console.log("connecting");
//         await connect();
//         console.log("connected DB");

//         console.log("fetching Document");
//         const Tests = await News.find();
//         console.log("fetched succesful");

//         return {
//             props: {
//                 Tests: JSON.parse(JSON.stringify(Tests)), 
//             },
//         };

//     }catch(error){
//         console.log(error);
//         return{
//             notFound: true,
//         }
//     }
// }
// const getTopic = async ()=>{
//     try {
//         const res =  await fetch("http://localhost:3000/api/getNews",{
//             cache : "no-store",
//         });

//         if(!res.ok){
//             throw new Error('failed to fetch');
//         }
//     } catch (error) {
//         console.log("Error loading topics");
//     }
// }

// export const getStaticProps = async()=>{
//     try{
//         console.log("connecting");
//         await connect();
//         console.log("connected DB");
  
//         console.log("fetching Document");
//         const Tests = await News.find();
//         // const get = await Newsdb.findById();
//         console.log("fetched succesful");
  
//         return {
//             props: {
//                 Tests: JSON.parse(JSON.stringify(Tests)), 
//                 // get: JSON.parse(JSON.stringify(get)),
//             },
//         };
  
//     }catch(error){
//         console.log(error);
//         return{
//             notFound: true,
//         }
//     }
//   }

// export const getIdnews = async()=>{
//     try{
//         console.log("connecting");
//         await connect();
//         console.log("connected DB");

//         console.log("fetching Document");
//         const get = await News.findById();
//         console.log("fetched succesful");

//         return {
//             props: { 
//                 get: JSON.parse(JSON.stringify(get)),
//             },
//         };

//     }catch(error){
//         console.log(error);
//         return{
//             notFound: true,
//         }
//     }
// }