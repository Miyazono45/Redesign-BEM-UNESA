"use client";
// import connect from "../../../backend/index";
// import News from "../../../models/News";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["cyrillic-ext"] });

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import Slider from 'react-slick';

// const  topics  = await getTopic();
export default function slide({ news }) {
  //  t._id ${encodeURIComponent(t.slug)} // text-3xl md:text-5xl p-6 h-50 w-50  md:p-10 md:w-60 md:h-60
  // const [progressWidth, setProgressWidth] = useState(20);

  const settings = {
    // infinite: false,
    slidesToShow: 2,
    swipeToSlide: true,
    // nextArrow: <NextIcon />,
    // prevArrow: <PrevIcon />,
    afterChange: (index) => {
      setProgressWidth((100 / 5) * (index + 1));
    },
  };
  // const [index,setIndex] = useState(0);
  // const handleSelect  =(selectedIndex,e)=>{
  //   setIndex(selectedIndex);
  // }

  return (
    <div className={`${raleway.className}`}>
      <div className="flex flex-col justify-center items-center h-screen w-screen md:mt-7 sm:mt-5">
        <h1 className="font-bold text-[1.5em] text-[#1E1E1E] md:text-[2.25em] lg:text-[2.75em] lg:font-extrabold xl:text-[4em]">
          Berita <span className="text-yellow-400">Terbaru</span>
        </h1>
        <div className="flex flex-col justify-center items-center">
          <Carousel
            showThumbs={false}
            {...settings}
            className="flex flex-row justify-center items-center w-[296px]  md:w-[524px] lg:w-[728px] xl:w-[928px] rounded-md"
            autoPlay
            infiniteLoop
            dynamicHeight={false}
          >
            {news?.map((t) => (
              <Link
                key={t._id}
                interval={4000}
                className=""
                href={"/Berita/getBerita/" + t._id}
              >
                <div>
                  <Image
                    src={`/${t.image}`}
                    width={675}
                    height={485}
                    className="h-auto w-auto rounded-lg"
                    alt={t.title}
                  />

                  <h3 className="font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {t.title}
                  </h3>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

const PrevIcon = ({ onClick }) => {
  return (
    <div className="slick-icons slick-icons--left ">
      <RiArrowLeftSLine className="slick-icons--left" onClick={onClick} />
    </div>
  );
};

const NextIcon = ({ onClick }) => {
  return (
    <div className="slick-icons slick-icons--right">
      <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
    </div>
  );
};
