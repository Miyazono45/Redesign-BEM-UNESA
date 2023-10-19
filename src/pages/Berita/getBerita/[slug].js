"use client";

import { useRouter } from "next/router";

import Image from "next/image";
import connect from "../../../../backend/index";
import News from "../../../../models/News";
import Navbar from "../../components/Navbar";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["cyrillic-ext"] });

export const getServerSideProps = async (context) => {
  const id = context.query.slug;
  try {
    console.log("connecting");
    await connect();
    console.log("connected DB");

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
        <h1 className="font-bold text-xl ">{get?.title}</h1>
        <p className="text-xs mb-5">Diposting pada {get?.createdAt}</p>
        <Image
          className="rounded-xl"
          src={`/${get.image}`}
          alt={get?.title}
          width={5760}
          height={3280}
        />
        <p className="mt-5">{get?.desc}</p>
      </div>
    </>
  );
}
