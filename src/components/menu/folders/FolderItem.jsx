import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { HiOutlineFolder } from "react-icons/hi";
import { IoAdd } from "react-icons/io5";

function FolderItem({ folder, index }) {
  const [visible, setVisible] = useState(false);
  const handleDropDown = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative mb-3" key={index}>
      <div
        className="flex items-center justify-between m-1 p-1.5 hover:bg-gray-50 rounded-[10px] cursor-pointer"
        onClick={handleDropDown}
      >
        <div className="left flex  items-center gap-2">
          <HiOutlineFolder size={"1.5rem"} />
          <p className="text-md">{folder.name}</p>
        </div>
        <div className="icon rounded-[50%] w-4 h-5">
          {visible ? (
            <BiSolidUpArrow size={"12px"} color="gray" />
          ) : (
            <BiSolidDownArrow size={"12px"} color="gray" />
          )}
        </div>
      </div>
      {visible && (
        <div className="flex flex-col ml-[2rem]">
          {folder.items.map((item) => (
            <div>
              <div className="flex items-center h-[2rem] border-l-2">
                <div className="border w-[15px]"></div>
                <div className="ml-3 w-full h-5">
                  <div className="rounded-[10px]  hover:bg-slate-100 ">
                    {item}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <div className="flex flex-col hover:bg-slate-100  border-l-2 h-[1rem]">
              <div className="ml-[1.6rem] mt-1.5 opacity-50 flex gap-2 absolute items-center">
                <IoAdd className="bg-gray-200 rounded-lg" size={"1rem"} />
                <p> Add new sub</p>
              </div>
              <div className="border w-[17px] absolute top-[13.5rem] ml-[-2px]"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FolderItem;
