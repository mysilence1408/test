"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Image from "next/image";
import ArrowDown from "@/../public/arrow-down.svg";

export default function App() {
  return (
    <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between items-start md:items-start lg:items-center max-w-7xl mx-auto lg:mt-[200px]">
      <div>
        <Tabs
          aria-label="Options"
          color="success"
          variant="bordered"
          className=" bg-[#EFF2E6] rounded-xl"
        >
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <span>پرفروشترین ها</span>
              </div>
            }
          />
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <span>جدیدترین ها</span>
              </div>
            }
          />
          <Tab
            key="videos"
            title={
              <div className="flex items-center space-x-2">
                <span>محبوب ترین ها</span>
              </div>
            }
          />
        </Tabs>
      </div>
      <button className=" flex flex-row self-start gap-2 border-2 border-dotted border-[#80AD01] rounded-md w-fit px-4 py-2 text-[#80AD01]">
        <span>مشاهده همه</span>
        <Image src={ArrowDown} alt="arrow-down" width={25} height={25} />
      </button>
    </div>
  );
}
