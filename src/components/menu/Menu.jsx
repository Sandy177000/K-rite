import React from "react";
import Folders from "./folders/Folders";
import Footer from "./footer/Footer";
import { FaUserLarge } from "react-icons/fa6";
import Teams from "./Teams";
import { RxCross1 } from "react-icons/rx";

function Menu({ toggle }) {
  const handleToggle = () => {
     
  };
  return (
    <>
      
      <div className="header m-[0.5rem] bg-white flex items-center justify-between rounded-[10px]">
        <div className="left flex items-center">
          <div className="logo w-11 h-11 rounded-[13px] m-1 bg-red-950"></div>
          <div className="title">
            <p className="text-sm opacity-50">INC</p>
            <p>InnovateHub</p>
          </div>
        </div>
        <div className="profileImage w-10 h-10 bg-gray-200 rounded-[50%] m-1 flex items-center justify-center">
          <FaUserLarge size={"1.5rem"} />
        </div>
      </div>

      <div className="overflow-auto">
        <Teams />
      </div>
      <div className="">
        <Folders />
      </div>
      <div className="mt-[130px] w-full">
        <Footer days={7} />
      </div>
    </>
  );
}

export default Menu;
