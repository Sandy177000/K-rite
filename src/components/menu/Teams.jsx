import React from "react";
import { CiBullhorn, CiPen } from "react-icons/ci";
import { LuCode } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";
import { MdKeyboardCommandKey } from "react-icons/md";

function Teams() {
  const teams = [
    {
      logo: <CiPen size={"1.5rem"} />,
      name: "Design Team",
      val: "1",
    },
    {
      logo: <CiBullhorn size={"1.5rem"} />,
      name: "Marketing Team",
      val: "2",
    },
    {
      logo: <LuCode size={"1.5rem"} />,
      name: "Development Team",
      val: "3",
    },
  ];

  return (
    <div className="teams  bg-white m-[0.5rem] rounded-[10px] py-1  border">
      {teams.map((team, index) => (
        <div className="flex items-center justify-between m-1 p-1.5 hover:bg-gray-50 hover:scale-[101%] rounded-[10px] cursor-pointer" key={index}>
          <div className="left flex  items-center gap-2">
            {team.logo}
            <p className="text-md">{team.name}</p>
          </div>
          <div className="feature rounded-[10px] bg-gray-200 p-2 h-6 items-center flex gap-1">
            <MdKeyboardCommandKey size={"1rem"} color="gray" />
            <p className="text-gray-500"> +{team.val}</p>
          </div>
        </div>
      ))}

      <div className=" border-slate-200 border-t w-full"></div>
      <div className="flex items-center justify-between m-1 p-1.5 hover:bg-gray-50 hover:scale-[101%] rounded-[10px] opacity-50 cursor-pointer">
        <div className="left flex  items-center gap-2">
          <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-[8px] shadow-sm border-[1.5px] border-gray-500">
            <IoAdd size={"1rem"} className="" />
          </div>

          <p className="text-md ">Create a team</p>
        </div>
      </div>
    </div>
  );
}

export default Teams;
