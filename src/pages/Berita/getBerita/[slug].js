'use client'


import { useRouter } from 'next/router'

import connect from '../../../../backend/index'
import News from '../../../../models/News'
import Navbar from '../../components/Navbar';
import Image from 'next/image';

// export async function getServerSideProps(params){
//     const{id} = params.query;

//     const res = await News.findById(id);
//     // const data = await res.json()

//     // console.log(data);

//     return{
//         props: {
//             res,
//         },
//     };
    
// }


// export default function BeritaId({param}){
//     console.log(param);
//     // const params = useParams();
//     // console.log(params);
//     return (
//         <>
//         <div key={param?._id}>
//             <h2>
//                 {param?.title}
//             </h2>
//             <p>
//                 {param?.description}
//             </p>
//         </div>
//         </>
//     )
// }
// export const getsStaticspath =async()=>{
//   const router = useRouter()
//   const id = router.query.slug; 
//   try {
//     await connect()

//   } catch (error) {
    
//   }
// }

export const getServerSideProps = async(context)=>{
//   const router = useRouter(context)
  const id = context.query.slug;
//   console.log(id);
  // const id = router.query.slug;
    try{
        console.log("connecting");
        await connect();
        console.log("connected DB");

        console.log("fetching Document");
        const get = await News.findById(id);
        console.log(get);
        console.log("fetched succesful");

        return {
            props: { 
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
 
export default function Page({get}) {
//  console.log(get);  
  return (
    <>
    <Navbar/>
      <div>
        <Image
          src={'/'+get.image}
          height={500}
          width={500}
          alt="foto Berita"
        />
          <h1>{get?.title}</h1>
          <p>{get?.desc}</p>
      </div>
    </>
    
  )
}

// const getidnews = async()=>{
//   try {
//     await connect();
//     const get = await News.findById({id})
//     console.log(get);
//   } catch (error) {
      
//   }
// }