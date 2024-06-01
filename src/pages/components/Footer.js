import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Logo from "../../../public/logo-unesa.png";
import BEM from "../../../public/logo-bem.png";
import Karya from "../../../public/logo-footer-ruang-karya.png";
// import Twa from "../../../public/Twa1.svg";
// import Tess from "../../../public/Tess.svg";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["cyrillic-ext"] });

const Footer = () => {
  //   const [isVisible, setIsVisible] = useState(false);
  //   const elementRef = useRef(null);

  //   const handleScroll = () => {
  //     const element = elementRef.current;
  //     const elementPosition = element.getBoundingClientRect().top;
  //     const windowHeight = window.innerHeight - 100;

  //     if (elementPosition < windowHeight) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <div
      className={`${raleway.className} w-screen h-auto bg-[#F9E587] px-[12.5%] pt-[2.5%] mt-20 pb-[2.5%]`}
    >
      <div className="flex justify-between">
        {/* Text Awal */}
        <div className="flex flex-col">
          <div>
            <h1 className="text-[#1F183C] font-extrabold text-[3.5em]">
              BEM <span className="text-white">UNIVERSITAS</span>
            </h1>
          </div>
          <div>
            <h1 className="text-white font-extrabold text-[3.5em]">
              NEGERI <span className="text-[#1F183C]">SURABAYA</span>
            </h1>
          </div>
        </div>

        {/* Text kedua */}
        <div>
          <div className="mt-4 font-bold text-3xl">
            <h1>Seketariat BEM UNESA :</h1>
            <p className="font-light text-xl text-[#1F183C]">
              Jl. Unesa, Kota Surabaya
            </p>
          </div>

          <div className="mt-4 font-bold text-3xl">
            <h1>Email :</h1>
            <p className="font-light text-xl text-[#1F183C]">bem@unesa.ac.id</p>
          </div>

          <div className="mt-4 font-bold text-3xl">
            <h1>Hubungi Kami :</h1>
            <p className="font-light text-xl text-[#1F183C]">
              Feby :+6281254155827
            </p>
          </div>
        </div>
      </div>

      {/* Logo Anjay */}
      <div className="flex flex-row grow gap-3 basis-0 w-[75%] items-center mt-5">
        <div className="">
          <Image src={Logo} width={100} height={100} alt="Logo UNESA" />
        </div>
        <div>
          <Image src={BEM} width={75} height={75} alt="Logo BEM" />
        </div>
        <div>
          <Image src={Karya} width={125} height={125} alt="Logo Karya" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
