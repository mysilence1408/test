import React from "react";
import { LuHome } from "react-icons/lu";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const NavigationBar = () => {
  return (
    <div className=" flex lg:hidden fixed bottom-0 left-0 right-0 w-full justify-center h-fit gap-16 bg-white p-4 ">
      <div className="flex flex-col items-center">
        <LuHome />
        <p>خانه</p>
      </div>
      <div className="flex flex-col items-center">
        <HiMiniRectangleGroup />
        <p>دسته بندی ها</p>
      </div>
      <div className="flex flex-col items-center">
        <FaCartShopping />
        <p>خرید</p>
      </div>
      <div className="flex flex-col items-center">
        <IoPerson />
        <p>پروفایل</p>
      </div>
    </div>
  );
};

export default NavigationBar;
