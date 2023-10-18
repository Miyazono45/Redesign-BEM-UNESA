import '@/styles/globals.css'
import Navbar from './components/Navbar'
import NewsSlide from './components/NewsSlide.js'
import { useEffect,useState } from 'react'

import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['cyrillic-ext'] })


export default function App({ Component, pageProps }) {
  return (
    
    <>
      {/* <Navbar  /> */}


      <main className={raleway.className}>
        <Component{...pageProps}/>
        {/* <NewsSlide news={pageProps.Tests}/> */}
      </main>

      
    </>
  )
}


