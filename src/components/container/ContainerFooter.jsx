import React from "react";
import { BiArchive, BiCross, BiTrash } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";

function ContainerFooter({ selectedCount }) {
  const options = [
    {
      label: "option 1",
    },
    {
      label: "option 2",
    },
    {
      label: "option 3",
    },
    {
      label: "option 4",
    },
  ];

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      width: "100px",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      color: "#000000",
      cursor: isDisabled ? "not-allowed" : "default",
      backgroundColor: isFocused ? "#f0f0f049" : "white",
    }),
    menu: (styles) => ({
      ...styles,
      marginTop: "-200px", // Adjust this value to position the menu above the tag
    }),
  };

  return (
    <div className="absolute w-full bottom-2 footer">
      <div className="footer flex justify-center">
        <div className="bottom-0 center  flex gap-2 items-center rounded-xl shadow-md border p-3  justify-center bg-white">
          <div className="flex gap-1 items-center">
            <div className="rounded-lg text-white w-[30px] h-[30px] bg-black items-center justify-center flex">
              {selectedCount}
            </div>
            <p>selected</p>
          </div>
          <div className="rounded-lg border p-2 cursor-pointer hover:bg-gray-100 flex items-center gap-1">
            <BiArchive /> Archive
          </div>
          <div className="rounded-lg border p-2 cursor-pointer hover:bg-gray-100 flex items-center gap-1">
            <BiTrash color="red" /> Delete
          </div>

          <div className="rounded-lg border p-2 cursor-pointer hover:bg-gray-100">
            <Select
              placeholder={"More"}
              options={options}
              styles={customStyles}
            />
          </div>
          <RxCross1 size={"1.2rem"} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ContainerFooter;
