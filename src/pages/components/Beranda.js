import Link from 'next/link'

import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['cyrillic-ext'] })

const head = () => {
    return (
        <main id='#beranda' className={`${raleway.className}`}>
            <div className="w-screen h-screen bg-cover bg-no-repeat bg-[url('../../public/heroTransparent.webp')] bg-center pt-[30vh] px-[25px] md:pt-[35%] md:px-[5%] lg:pt-[15%] xl:pt-[12.5%]">

                {/* Main Text */}
                <div className="flex items-center justify-center flex-col font-extrabold text-[#1F183C]">
                    <p className=' text-[1em] font-normal md:text-[1.5em] md:font-semibold lg:font-normal xl:text-[2em] xl:font-medium'>
                        Selamat Datang di official website
                    </p>
                    <h1 className='text-[2.9em] -mt-2 md:text-[5.5em] md:-mt-6 xl:text-[7.5em]'> BEM <span className='text-yellow-400'> UNESA </span>
                    </h1>
                    <h1 className='text-[2.8em] -mt-8 md:text-[5.5em] md:-mt-[3.5rem] lg:text-[8em] lg:-mt-[5.5rem]'>
                        2023
                    </h1>
                </div>

                {/* Arrow */}
                <Link href={'#tentangKami'} scroll={false} className='flex justify-center mt-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15" fill="none" className='w-6 h-6 md:w-16 md:h-16 lg:hidden'>
                        <path d="M5.33333 8.22222L7.5 10.3889M7.5 10.3889L9.66667 8.22222M7.5 10.3889V4.61111M14 7.5C14 11.0899 11.0899 14 7.5 14C3.91015 14 1 11.0899 1 7.5C1 3.91015 3.91015 1 7.5 1C11.0899 1 14 3.91015 14 7.5Z" stroke="#4B6AFA" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 34 34" fill="none" className='hidden justify-start w-16 h-16 lg:flex xl:mt-[0em]'>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9434 17.935L17.9339 23.9488C17.6789 24.2038 17.3304 24.2782 17 24.2144C16.6696 24.2782 16.3211 24.2038 16.0661 23.9488L10.0566 17.935C9.64112 17.5206 9.64112 16.8512 10.0566 16.4262C10.4709 16.0118 11.1435 16.0118 11.5589 16.4262L15.9375 20.8143V9.5625C15.9375 8.97812 16.4135 8.5 17 8.5C17.5876 8.5 18.0625 8.97812 18.0625 9.5625V20.8143L22.4411 16.4262C22.8565 16.0118 23.5301 16.0118 23.9434 16.4262C24.3589 16.8512 24.3589 17.5206 23.9434 17.935ZM17 0C7.61069 0 0 7.6075 0 17C0 26.3925 7.61069 34 17 34C26.3893 34 34 26.3925 34 17C34 7.6075 26.3893 0 17 0Z" fill="#4B6AFA" />
                    </svg>
                </Link>

            </div>
        </main>
    )
}

export default head