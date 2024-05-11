"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ArrowDown from "@/../public/arrow.png";
import Carousel from "./Carousel";

const Icons = [
  {
    id: 1,
    image: "/1.png",
  },
  {
    id: 2,
    image: "/2.png",
  },
  {
    id: 3,
    image: "/3.png",
  },
  {
    id: 4,
    image: "/4.png",
  },
];

export default function OtherProducts() {
  return (
    <div className=" flex flex-col-reverse lg:flex-row gap-8 items-center lg:px-16 py-8 bg-[#626754]  max-w-7xl mx-auto rounded-lg mt-[100px]">
      <div className=" flex flex-col gap-16 w-1/2 items-center ">
        <div className="grid grid-cols-2">
          {Icons.map((icon) => (
            <Image
              key={icon.id}
              src={icon.image}
              alt="Icon"
              width={150}
              height={150}
            />
          ))}
        </div>
        <div className=" flex text-center bg-[#80AD01] w-full justify-center gap-3 rounded-md py-2 cursor-pointer">
          <p className=" text-white">مشاهده همه محصولات</p>
          <Image src={ArrowDown} alt="ArrowDown" />
        </div>
      </div>

      <Carousel />
    </div>
  );
}
