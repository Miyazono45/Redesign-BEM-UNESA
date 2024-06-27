"use client";

import { useRouter } from "next/router";

import Image from "next/image";
import connect from "../../../../backend/index";
import News from "../../../../models/News";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["cyrillic-ext"] });

export const getServerSideProps = async (context) => {
  const id = context.query.slug;
  try {
    // console.log("connecting");
    await connect();
    // console.log("connected DB");

    console.log("fetching Document");
    const get = await News.findById(id);
    console.log(get);
    console.log("fetched succesful");

    return {
      props: {
        get: JSON.parse(JSON.stringify(get)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default function Page({ get }) {
  return (
    <>
      <Navbar />
      <div className={`${raleway.className} p-[10%] pt-15`}>
        <h1 className="font-extrabold text-4xl ">{get?.title}</h1>
        <p className="text-xl mb-5 font-light mt-1">
          Diposting pada {get?.createdAt}
        </p>
        <Image
          className="rounded-xl mt-10"
          src={`/${get.image}`}
          alt={get?.title}
          width={5760}
          height={3280}
        />
        <p className="mt-5 font-light text-2xl">{`${get?.desc}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque.`}</p>
      </div>
      <Footer />
    </>
  );
}
