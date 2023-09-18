import React from "react";
import { mainContentPlusIcon2 } from "../constants";
import EmptyCardComponent from './EmptyCardComponent'
const Revised = () => {
  return (
    <div className="flex flex-col w-[275px] gap-5">
      <div className="flex w-full justify-between items-center ps-3 pe-3">
        <p>Revised(0)</p>
        <div className="p-2 rounded-[10px] bg-[#211a75] cursor-pointer">
          {mainContentPlusIcon2}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <EmptyCardComponent
          description={"Move card here"}
        />
      </div>
    </div>
  );
};

export default Revised;
