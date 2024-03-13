import React, { useState } from "react";
import ContainerBody from "./ContainerBody";
import ContainerTable from "./ContainerTable";
import { BiSearch } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";

function Container({ selectedCount, setSelectedCount }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="w-full">
      <div className="w-full h-15  flex justify-between p-4 items-center">
        <div className="text-[20px]">Products</div>
        <div className="right flex gap-1">
          <div className=" flex border rounded-md">
            <div className="icon w-[35px] h-[35px] rounded-md items-center justify-center flex">
              <BiSearch size={"1rem"} />
            </div>

            <input
              type="text"
              className="w-[10rem] border-none outline-none "
              placeholder="Search for..."
              value={searchValue}
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div className="icon border w-[35px] h-[35px] rounded-md items-center justify-center flex hover:bg-gray-50 cursor-pointer">
            <LuMessagesSquare />
          </div>
          <div className="icon border w-[35px] h-[35px] rounded-md items-center justify-center flex  hover:bg-gray-50 cursor-pointer">
            <LuSettings />
          </div>
        </div>
      </div>

      <ContainerBody />
      <div className="h-[650px] overflow-auto custom-scrollbar">
        <ContainerTable
          searchValue={searchValue}
          selectedCount={selectedCount}
          setSelectedCount={setSelectedCount}
        />
      </div>
    </div>
  );
}

export default Container;
