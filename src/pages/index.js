
import Navbar from './components/Navbar.js'
import NewsSlide from './control/news.js'

import { Inter } from 'next/font/google'
import { Raleway } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({subsets: ['cyrillic-ext']})

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div>
        <div className=" bg-cover bg-no-repeat h-screen w-full bg-[url('../../public/main-hero.png')]
        pt-[25%] md:pt-[20%] lg:pt-[17.5%] xl:pt-[10%] bg-center">
          <div className="flex items-center justify-center content-center flex-col">
            <h4 className=' text-3xl font-light  font-[raleway] '>
              Selamat Datang di official website
            </h4>
            <h2 className='text-9xl font-extrabold font-[raleway] underline'>
              <span className='text-[rgb(31,24,60)]'>
              BEM
              </span> <span className='text-[rgb(255,191,24)]'>
                  UNAIR

              </span>
            </h2>
          </div>
        </div>
      </div>
      <div>
      </div>
    </main>
  )
}
