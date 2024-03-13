import React from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import { RxQuestionMarkCircled } from "react-icons/rx";

function Footer({ days }) {
  return (
    <div className=" bg-white m-[0.5rem] rounded-[10px] py-1 ">
      <div className="flex items-center justify-between m-1 p-1.5 hover:bg-gray-100 rounded-[10px] cursor-pointer ">
        <div className="left flex  items-center gap-2">
          <HiOutlineUserAdd size={"1.5rem"} />
          <p className="text-md ">Invite teammates</p>
        </div>
      </div>

      <div className="flex items-center justify-between m-1 p-1.5 hover:bg-gray-100 rounded-[10px] cursor-pointer">
        <div className="left flex  items-center gap-2">
          <RxQuestionMarkCircled size={"1.5rem"} />
          <p className="text-md ">Help and first steps</p>
        </div>
      </div>

      <div className="flex justify-between m-1 p-1.5 rounded-[10px]">
        <div className="left flex  items-center">
          <div className="flex rounded-lg bg-white w-7 border items-center  justify-center mr-1">
            {days}
          </div>
          <p className="text-md ">days left on trial</p>
        </div>

        <div className="rounded-md bg-slate-900   p-1 items-center flex justify-center text-white hover:bg-gray-800">
          <p className="text-sm p-1 cursor-pointer ">Add billing</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
