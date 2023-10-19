"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Logo from "../../../public/logo-unesa.png";
import BEM from "../../../public/logo-bem.png";
import Karya from "../../../public/logo-footer-ruang-karya.png";
import Twa from "../../../public/Twa1.svg";
import Tes from "../../../public/tes.svg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const handleScroll = () => {
    const element = elementRef.current;
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight - 100; // offset 100px dari atas jendela

    if (elementPosition < windowHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`bg-white mt-10 animate-fade-up ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="flex flex-row">
        <div className="bottom-0">
          {/* <div className="border-2  bg-[url('/twa.svg')] bg-cover"> */}
          <Image
            src={Tes}
            className=" absolute mt-[84px]  h-[26rem] w-[110rem] z-10 -ml-6 "
            alt=""
          />
          <div className=" ">
            <Image
              src={Twa}
              className="absolute z-20 w-[95rem] h-[31rem] -ml-6"
              alt=""
            />
          </div>
          <div className="flex flex-row">
            <div className="mr-[200px] mt-[160px] ml-[180px] flex flex-col z-30 ">
              <p className="font-extrabold text-[3.1em] text-[#F2F2F2]">
                <a className="text-[#1F183C]">BEM</a> UNIVERSITAS
              </p>
              <p className=" mt-[-10px] font-extrabold text-[3.1em] text-[#F0EFF1]">
                NEGERI <a className="text-[#1F183C]">SURABAYA</a>
              </p>
              <div className="flex flex-row">
                <Image src={Logo} className="w-[115px] h-[135px]" alt="" />
                <Image src={BEM} className=" ml-5 w-[80px] h-[145px]" alt="" />
                <Image
                  src={Karya}
                  className=" mt-7 ml-5 w-[180px] h-[85px]"
                  alt=""
                />
              </div>
            </div>
            <div className=" mt-[245px]  text-gray-800 flex flex-col z-40">
              <p className="text-[#1F183C] font-extrabold text-[1.8em]">
                Email:
              </p>
              <p className="font-medium -mt-2 text-[1.1em]">bem@unesa.ac.id</p>
              <p className="text-[#1F183C] font-extrabold text-[1.8em]">
                Hubungi Kami:
              </p>
              <p className="font-medium -mt-2 text-[1.1em]">
                Feby : +6281254155827
              </p>
              <p className="text-[#1F183C] font-extrabold text-[1.8em]">
                Seketariat BEM UNESA:
              </p>
              <p className="font-medium -mt-2 text-[1.1em]">
                Jl. Unesa, Kota Surabaya
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
