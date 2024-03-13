import React from "react";
import FolderItem from "./FolderItem";
import { MdAdd } from "react-icons/md";

function Folders() {
  const folders = [
    {
      name: "Products",
      items: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
    },
    {
      name: "Sales",
      items: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
    },
    {
      name: "Design",
      items: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
    },
    {
      name: "Office",
      items: [],
    },
    {
      name: "Legal",
      items: [],
    },
  ];



  return (
    <div className="folders  bg-white m-[0.5rem] rounded-[10px] py-1  relative">
      <div className="flex items-center justify-between m-1 p-1.5 opacity-50">
        <p>FOLDERS</p>
        <div className="icon rounded-[50%] w-5 h-5 cursor-pointer">
          <MdAdd size={"1.5rem"}/>
        </div>
      </div>
      {folders.map((folder, index) => (
        <FolderItem folder={folder} index={index}/>
      ))}
    </div>
  );
}

export default Folders;
