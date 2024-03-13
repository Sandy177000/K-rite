import React from "react";
import Select from "react-select";
import { PiCirclesFour } from "react-icons/pi";
import { RiListSettingsLine } from "react-icons/ri";
import { BsSortNumericDownAlt } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { LuImport } from "react-icons/lu";

function ContainerBody() {
  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      width: "180px",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: "#000000",
        cursor: isDisabled ? "not-allowed" : "default",
        backgroundColor: isFocused ? "#f0f0f049" : "white",
      };
    },
  };

  const brands = [
    {
      label: "All Brands",
    },

    {
      label: "Wix",
    },
    {
      label: "Google",
    },
    {
      label: "Microsoft",
    },
    {
      label: "PayPal",
    },

    {
      label: "Shopify",
    },
  ];

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

  const tags = [
    {
      label: "Tag 1",
    },
    {
      label: "Tag 2",
    },
    {
      label: "Tag 3",
    },
    {
      label: "Tag 4",
    },
  ];

  return (
    <div className="w-full flex-wrap flex gap-2 p-4 items-center justify-between border-t border-b container-body">
      <div className="left flex gap-2">
        <div className="select  ">
          <Select
            placeholder={
              <div className="flex gap-1 cursor-pointer">
                <PiCirclesFour size={"1.5rem"} /> All Brands
              </div>
            }
            options={brands}
            styles={customStyles}
          />
        </div>
        <div className="select cursor-pointer">
          <Select
            placeholder={"Desk"}
            options={options}
            styles={customStyles}
          />
        </div>
        <div className="select ">
          <Select
            placeholder={"Tags"}
            options={tags}
            styles={customStyles}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="center flex gap-2">
        <div className="rounded-md border p-1 flex gap-1 items-center cursor-pointer">
          <BsSortNumericDownAlt size={"1rem"} />
          <p>Sort</p>
        </div>
        <div className="rounded-md border p-1 flex gap-1 items-center cursor-pointer">
          <RiListSettingsLine size={"1rem"} />
          <p>Filter</p>
        </div>
      </div>

      <div className="right flex gap-1 cursor-pointer">
        <div className="rounded-md border p-1 px-2 flex items-center gap-1">
          <IoAdd
            className="rounded-[3px] bg-gray-300 border-black"
            size={"1rem"}
          />
          <p>Meeting</p>
        </div>
        <div className="rounded-md border p-1 px-3 flex items-center gap-1">
          <LuImport className="rounded-[3px]" size={"1.2rem"} />
          <p>Import/Export</p>
        </div>
      </div>
    </div>
  );
}

export default ContainerBody;
