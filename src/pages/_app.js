import '@/styles/globals.css'
import Navbar from './components/Navbar'
import NewsSlide from './components/NewsSlide.js'
import { useEffect,useState } from 'react'


export default function App({ Component, pageProps }) {
  // const [news, setNews] = useState(null)

  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     const response = await fetch('http://localhost:3000/api/route')
  //     if (!response.ok){
  //       throw new Error('HTTP Error status: ${response.status}')
  //     }
  //     const result = await response.json();
  //     setNews(result)
  //   }
  //   fetchData().catch((e)=>{
  //     console.error('An error occurred while fetching the data: ', e)
  //   })
  // }, [])
  // console.log(pageProps);
  return (
    
    <>
      <Navbar  />


      <main>
        <Component{...pageProps}/>
        {/* <NewsSlide news={pageProps.Tests}/> */}
      </main>

      
    </>
  )
}

// export const getServerSideProps = async()=>{
//   try{
//       console.log("connecting");
//       await connect();
//       console.log("connected DB");

//       console.log("fetching Document");
//       const Tests = await News.find();
//       console.log("fetched succesful");

//       return {
//           props: { 
//               Tests: JSON.parse(JSON.stringify(Tests)), 
//               get: JSON.parse(JSON.stringify(get)),
//           },
//       };

//   }catch(error){
//       console.log(error);
//       return{
//           notFound: true,
//       }
//   }
// }
