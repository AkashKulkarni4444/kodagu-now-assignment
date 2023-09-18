import React from "react";
import CardComponent from "./CardComponent";
import { mainContentPlusIcon2 } from "../constants";
const Done = () => {
  return (
    <div className="flex flex-col w-[275px] gap-5">
      <div className="flex w-full justify-between items-center ps-3 pe-3">
        <p>To-Do List(24)</p>
        <div className="p-2 rounded-[10px] bg-[#211a75] cursor-pointer">
          {mainContentPlusIcon2}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <CardComponent
          header={"BUGS FIXING"}
          description={"Action Buttons needed for Google Maps visits."}
          headerColour={"#ff4a55"}
          barColour={"#ff4a55"}
          barPercentage={100}
        />
        <CardComponent
          header={"Database"}
          description={"Update new instructor photos."}
          headerColour={"green"}
          barColour={"#38a169"}
          barPercentage={100}
        />
        <CardComponent
          header={"Instructor Meeting"}
          description={"Review/correct yellow belt techniques."}
          headerColour={"pink"}
          barColour={"#d53f8c"}
          barPercentage={100}
        />
      </div>
    </div>
  );
};

export default Done;
