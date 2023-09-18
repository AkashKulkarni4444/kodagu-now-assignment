import React from "react";
import { mainContentPlusIcon } from "@/components/constants";
import CardComponent from "@/components/Content/CardComponent";

const ToDoList = () => {
  return (
    <div className="flex flex-col w-[275px] gap-5">
      <div className="flex w-full justify-between items-center ps-3 pe-3">
        <p>To-Do List(24)</p>
        <div className="p-2 rounded-[10px] bg-[#6418c3] cursor-pointer">
          {mainContentPlusIcon}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <CardComponent
          header={"Important"}
          description={"Create sign up sheet for holiday student/parent conferences."}
          headerColour={"yellow"}
          barColour={"#d69e2e"}
          barPercentage={20}
        />
        <CardComponent
          header={"Instructor Meeting"}
          description={"Plan holiday demonstration program. Create outline."}
          headerColour={"pink"}
          barColour={"#d53f8c"}
          barPercentage={30}
        />
        <CardComponent
          header={"Database"}
          description={"Determine how many boards need to be ordered for testing and demo."}
          headerColour={"green"}
          barColour={"#38A169"}
          barPercentage={15}
        />
      </div>
    </div>
  );
};

export default ToDoList;
