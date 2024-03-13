import React, { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import ContainerTableRow from "./ContainerTableRow";
import { IoAdd } from "react-icons/io5";
import { data1 } from "../../data";

function ContainerTable({ searchValue, selectedCount, setSelectedCount }) {
 
  const filteredData = data1.filter((row) =>
    row.brand.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="overflow-auto custom-scrollbar h-[98%]">
      <table className="w-full">
        <thead className="h-[50px]">
          <tr>
            <th className="  opacity-50">
              <div className="flex">
                <input type="checkbox" className="checkbox ml-4" />
                <div className="flex gap-2 ml-3">Brand</div>
              </div>
            </th>
            <th className="  opacity-50">
              <div className="ml-4">Description</div>
            </th>
            <th className="  opacity-50">
              <div className="ml-4">Members</div>
            </th>
            <th className="  opacity-50">
              <div className="ml-4">Categories</div>
            </th>
            <th className="  opacity-50">
              <div className="ml-4">Tags</div>
            </th>
            <th className="  opacity-50">
              <div className="ml-4">Next Meeting</div>
            </th>

            <th className="  opacity-50">
              <div className=""><IoAdd size={"1.2rem"}/></div>
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((row, index) => (
            <ContainerTableRow
              row={row}
              index={index}
              setSelectedCount={setSelectedCount}
              selectedCount={selectedCount}
            />
          ))}
        </tbody>
        {/* footer */}
        <tfoot>
          <tr>
            <td>
              <div>
                <p>{filteredData.length} count</p>
              </div>
            </td>
            <td>
              <div>
                <IoAdd className="bg-gray-200 rounded-lg" size={"1rem"} />
                <p>Add Calculation</p>
              </div>
            </td>
            <td>
              <div>
                <IoAdd className="bg-gray-200 rounded-lg" size={"1rem"} />
                <p>Add Calculation</p>
              </div>
            </td>
            <td>
              <div>
                <IoAdd className="bg-gray-200 rounded-lg" size={"1rem"} />
                <p>Add Calculation</p>
              </div>
            </td>
            <td>
              <div>
                <IoAdd className="bg-gray-200 rounded-lg" size={"1rem"} />
                <p>Add Calculation</p>
              </div>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ContainerTable;
