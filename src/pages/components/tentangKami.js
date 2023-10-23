import Image from "next/image.js";
import Link from "next/link";
import Footer from "./Footer";

import { useState } from "react";

const tentangkami = () => {
  // Button More JS
  const [isHover, setisHover] = useState(false);
  const bmHovered = (apkh) => {
    setisHover(apkh);
  };

  return (
    <main id="tentangKami">
      <div className="w-screen h-screen px-[25px] pt-[30%] md:pt-[20%] md:px-[10%] lg:px-[5%] lg:pt-0 lg:flex lg:items-center xl:px-[7.5%]">
        {/* Containter */}
        <div className="lg:flex lg:flex-row">
          {/* Hero Image */}
          <div className="w-[100%] h-full flex items-center lg:self-center lg:grow lg:basis-2/5">
            <Image
              src={"/mainUnesa.webp"}
              width={500}
              height={500}
              alt="Gambar Unesa"
              className="object-cover relative rounded-[6px] w-[100%] box-border md:rounded-3xl md:drop-shadow-md lg:rounded-xl lg:drop-shadow-lg lg:w-[100%] lg:h-[25em] xl:h-[40em]"
            />
          </div>

          {/* Container T.Kami */}
          <div className="flex flex-col items-center pt-10 lg:self-center lg:grow lg:basis-3/5 lg:pl-[2.5%] lg:pt-0 xl:items-left xl:self-start">
            {/* Tentang Kami */}
            <div className="">
              <h1 className="font-bold text-[1.5em] text-[#1E1E1E] md:text-[2.25em] lg:text-[2.75em] lg:font-extrabold xl:text-[4em]">
                Tentang <span className="text-yellow-400">Kami</span>
              </h1>
            </div>

            {/* Hero Text */}
            <div className="mt-7">
              <h1 className="font-semibold text-[.9em] text-[#1E1E1E] text-justify md:text-[1.35em] xl:text-[1.5em] xl:font-medium">
                <span className="font-bold text-yellow-400 xl:font-extrabold">
                  Badan Eksekutif Mahasiswa (BEM)
                </span>{" "}
                adalah organisasi mahasiswa intra kampus yang merupakan lembaga
                eksekutif di tingkat Universitas.{" "}
                <span className="font-bold text-yellow-400 xl:font-extrabold">
                  BEM UNESA
                </span>{" "}
                bertugas untuk merencanakan dan mengorganisasikan program
                kegiatan kemahasiswaan dalam bidang eksekutif dan
                manajerial/leadership di tingkat universitas.
              </h1>
            </div>

            {/* Button More */}
            <div
              className={`${
                isHover
                  ? "bg-transparent box-border border-2 border-[#4B6AFA]"
                  : "border-2 box-border bg-[#4B6AFA]"
              } border-2  mt-[20%] px-4 py-2 transition-all duration-150 box-border rounded-full md:mt-[10%]`}
              onMouseEnter={() => bmHovered(true)}
              onMouseLeave={() => bmHovered(false)}
            >
              <Link
                href={"/components/Profile"}
                className={`${
                  isHover ? "text-[#4B6AFA]" : "text-[#f8f6f6]"
                } font-extrabold transition-all duration-150 md:text-[1.75em] md:px-5 lg:text-[1.25em] xl:text-[1.75em] xl:font-medium`}
              >
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default tentangkami;
