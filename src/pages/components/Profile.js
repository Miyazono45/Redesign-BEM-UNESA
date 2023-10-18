import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from '../components/Navbar'

import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['cyrillic-ext'] })

export default function profile() {
    // Container Data
    const [dataRes, setDataRes] = useState([])

    useEffect(() => {
        async function getData() {
            const apiUrlEndPoint = "http://localhost:3000/api/routeProfile"
            const response = await fetch(apiUrlEndPoint)
            const res = await response.json()
            setDataRes(res.results)
        }
        getData()
    }, [])

    const eachDataBem = (indexes) => {
        return (
            <div className="w-screen bg-[#1F183C] px-[10%] fixed z-10">
                <div className="">
                    <h1>{dataRes[indexes].judul}</h1>,
                    <p>{dataRes[indexes].deskripsi}</p>
                    <Image src={`/${dataRes[indexes].gambar1}`} width={250} height={250} alt="Gambar tidak tersedia" />
                    {console.log(dataRes[indexes].judul)}
                </div>
            </div>
        )
    }

    // <div className="">
    //     <h1>{dataRes[indexes].judul}</h1>,
    //     <p>{dataRes[indexes].deskripsi}</p>
    //     <Image src={`/${dataRes[indexes].gambar1}`} width={250} height={250} alt="Gambar tidak tersedia" />
    //     {console.log(dataRes[indexes].judul)}
    // </div>

    return (
        <main className={raleway.className}>
            {/* Container Hero */}
            <div className="flex flex-col justify-center items-center px-[10%] mt-[20%]">
                <div>
                    <h1 className="text-[#1F183C] font-extrabold text-3xl">Profile <span className="text-yellow-400">BEM Unesa</span></h1>
                </div>

                {/* Button */}
                <div className="flex flex-col justify-center items-center gap-5 mt-8">
                    {dataRes.map((items, index) => {
                        return (
                            < div key={index} className="w-screen bg-[#1F183C] px-[10%] fixed z-10">
                                <div className="">
                                    <h1>{items.judul}</h1>,
                                    <p>{items.deskripsi}</p>
                                    <Image src={`/${items.gambar1}`} width={250} height={250} alt="Gambar tidak tersedia" />
                                    {console.log(items.judul)}
                                </div>
                            </div>
                        )
                        // return <button className="bg-yellow-400 flex items-center justify-center rounded-full w-[90%] h-[1em] p-6 box-border"
                        //     onClick={() =>
                        //     }>
                        //     <h1 className="font-bold text-[#1F183C] text-md box-border">{items.judul}</h1>
                        // </button>
                    })}
                </div>
            </div>
        </main>
    );
}