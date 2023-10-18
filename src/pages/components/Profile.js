import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./Navbar.js";

import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['cyrillic-ext'] })

export default function profile() {
    // Container Data
    const [dataRes, setDataRes] = useState([])

    // button is clicked?
    const [isClicked, setIsClicked] = useState(false)
    const [num, setNum] = useState(0)

    // button is hovered?
    const [isHovered, setIsHovered] = useState(false)

    // BEM Array Anjay Mabar
    const bemJudul = []
    const bemDeskripsi = []
    const bemGambar1 = []
    const bemNama1 = []
    const bemJabatan1 = []
    const bemGambar2 = []
    const bemNama2 = []
    const bemJabatan2 = []
    dataRes.map((item) => { bemJudul.push(item.judul) })
    dataRes.map((item) => { bemDeskripsi.push(item.deskripsi) })
    dataRes.map((item) => { bemGambar1.push(item.gambar1) })
    dataRes.map((item) => { bemNama1.push(item.nama1) })
    dataRes.map((item) => { bemJabatan1.push(item.jabatan1) })
    dataRes.map((item) => { bemGambar2.push(item.gambar2) })
    dataRes.map((item) => { bemNama2.push(item.nama2) })
    dataRes.map((item) => { bemJabatan2.push(item.jabatan2) })

    useEffect(() => {
        async function getData() {
            const apiUrlEndPoint = "http://localhost:3000/api/routeProfile"
            const response = await fetch(apiUrlEndPoint)
            const res = await response.json()
            setDataRes(res.results)
        }
        getData()
    }, [])

    return (
        <main className={`${raleway.className}`} id="mProfile">
            {/* Popup */}
            <Navbar />
            <div className={`${isClicked ? 'flex' : 'hidden'} fixed z-20 items-center justify-center w-screen h-screen bg-transparent top-0 transition-all duration-200`}>
                <div className={'flex flex-col w-[90%] h-[90%] justify-center items-center outline outline-1 outline-white fixed bg-[#1F183C] z-10 px-[5%] rounded-xl md:h-[75%] lg:h-[85%]'}>
                    < button onClick={() => { setIsClicked(false); }} className="absolute right-4 top-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 12 12" fill="none">
                            <path d="M5.86707 5.49331L10.3604 1L10.7341 1.37377L6.24084 5.86707L10.7341 10.3604L10.3604 10.7341L5.86707 6.24084L1.37377 10.7341L1 10.3604L5.49331 5.86707L1 1.37377L1.37377 1L5.86707 5.49331Z" fill="#F0EFF1" stroke="#F0EFF1" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <h1 className="text-yellow-400 font-extrabold text-3xl max-w-prose text-center md:text-6xl lg:text-7xl">{bemJudul[num]}</h1>,
                    <p className="font-normal text-sm text-white py-6 max-w-prose md:text-xl">{bemDeskripsi[num]}</p>
                    {/* Orang */}
                    <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                        {/* Card Orang */}
                        <div className="flex flex-col justify-center items-center md:gap-4 lg:gap-1">
                            <div className="bg-slate-50 rounded-md flex justify-center items- w-[35vw] h-[20vh] overflow-hidden md:rounded-3xl">
                                <Image src={`/${bemGambar1[num]}`} width={250} height={250} alt="Gambar tidak tersedia" className="object-contain md:drop-shadow-md" />
                            </div>
                            <h1 className="text-yellow-400 text-center font-semibold text-lg max-w-prose md:text-2xl lg:font-bold lg:text-3xl lg:mt-3">{bemNama1[num]}</h1>
                            <p className="text-white text-center font-normal text-md max-w-prose md:text-lg">{bemJabatan1[num]}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center md:gap-4 lg:gap-1">
                            <div className="bg-slate-50 rounded-md flex justify-center items- w-[35vw] h-[20vh] overflow-hidden md:rounded-3xl">
                                <Image src={`/${bemGambar2[num]}`} width={250} height={250} alt="Gambar tidak tersedia" className="object-contain md:drop-shadow-md" />
                            </div>
                            <h1 className="text-yellow-400 text-center font-semibold text-lg max-w- md:text-2xl lg:font-bold lg:text-3xl lg:mt-3">{bemNama2[num]}</h1>
                            <p className="text-white text-center font-normal text-md max-w-prose md:text-lg">{bemJabatan2[num]}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* overlay */}
            <div className={`${isClicked ? 'flex' : 'hidden'} fixed z-10 items-center justify-center w-screen h-screen bg-black opacity-70 top-0`}></div>

            {/* Container Hero */}
            <div className="flex flex-col justify-center items-center px-[10%] pt-[20%] md:pt-[15%] xl:pt-[7.5%]">
                <div>
                    <h1 className="text-[#1F183C] font-extrabold text-3xl md:text-6xl lg:text-7xl xl:text-[8rem]">Profile <span className="text-yellow-400">BEM Unesa</span></h1>
                </div>

                {/* Button */}
                <div className="flex flex-col justify-center items-center gap-5 mt-8 pb-[10%] md:grid md:grid-cols-2 xl:grid-cols-3 xl:mt-16 xl:gap-x-20 xl:gap-y-9"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {dataRes.map((items, index) => {
                        return <button key={index} className={`${isHovered ? 'bg-transparent border-yellow-400' : 'bg-yellow-400'} border-2 border-yellow-400 flex items-center justify-center rounded-full w-[85%] h-[.75em] p-6 box-border transition-all duration-200 md:drop-shadow-md xl:w-[100%]`}
                            onClick={() => { setIsClicked(true); setNum(index) }}>
                            <h1 className={`${isHovered ? 'text-yellow-400' : 'text-[#1F183C]'} font-bold text-md box-border transition-all duration-200 md:text-lg`}>{items.judul}</h1>
                        </button>
                    }
                    )}
                </div>
            </div>
        </main >
    );
}