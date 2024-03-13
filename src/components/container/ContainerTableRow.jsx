import React, { useState } from "react";

function ContainerTableRow({ row, index, setSelectedCount, selectedCount }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = (e, row) => {
    setIsSelected(e.target.checked);
    
    if (e.target.checked) {
      setSelectedCount(selectedCount + 1);
    } else {
      setSelectedCount(selectedCount - 1);
    }
  };

  return (
    <tr className={isSelected ? "bg-gray-100" : ""} key={row.brand}>
      <td className="">
        <div className="flex">
          <input
            type="checkbox"
            className="checkbox ml-4"
            onChange={(e) => handleSelect(e, row)}
            checked={isSelected}
          />
          <div className="flex gap-2">
            <div className="rounded w-6 h-6 bg-black ml-3"></div>
            {row.brand}
          </div>
        </div>
      </td>
      <td className="min-w-[250px]" title={row.description}>
        <div className="ml-4  overflow-x-auto custom-scrollbar w-[150px]">
          {row.description.substring(0, 16)}...
        </div>
      </td>
      <td className="">
        {/* Members */}
        <div className="ml-2 flex relative w-[150px] h-full ">
          {row.members.map((member, index) => (
            <div
              key={index}
              className="rounded-full border-[3px] w-9 h-9 items-center justify-center flex top-[-18px] absolute bg-gray-100"
              style={{left: index + "7px" }}
            >
              {member.profile}
            </div>
          ))}
        </div>
      </td>
      {/* Categories */}
      <td className="w-[250px]">
        <div className="ml-4 flex gap-1 overflow-x-auto custom-scrollbar w-[250px]">
          {row.categories?.map((category) => (
            <div
              className={`rounded-lg  p-1 px-2`}
              style={{
                backgroundColor: `${category.bgColor}`,
                color: `${category.color}`,
                border: `1px solid ${category.color}`,
              }}
            >
              {category.name}
            </div>
          ))}
        </div>
      </td>
      {/* tags */}
      <td className="w-[250px]">
        <div className="ml-4 flex gap-1 overflow-x-auto custom-scrollbar w-[250px]">
          {row.tags?.map((tag) => (
            <div className="rounded-lg bg-gray-300 text-gray-500 p-1">
              #{tag}
            </div>
          ))}
        </div>
      </td>
      <td className="w-[250px]">
        <div className="ml-4">
          <div className="ml-4 flex gap-1 overflow-x-auto custom-scrollbar w-[250px]">
            <div
              className={`rounded-lg  p-1 px-2`}
              style={{
                backgroundColor: `${row.nextMeeting.bgColor}`,
                color: `${row.nextMeeting.color}`,
                border: `1px solid ${row.nextMeeting.color}`,
              }}
            >
              {row.nextMeeting.name}
            </div>
          </div>
        </div>
      </td>

      <td className=""> </td>
    </tr>
  );
}

export default ContainerTableRow;
