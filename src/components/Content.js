import React from "react";
import Title from "./Content/Title";
import ToDoList from "./Content/ToDoList";
import InProgress from "./Content/InProgress";
import Done from "./Content/Done";
import Revised from "./Content/Revised";

const Content = () => {
  return (
    <div className={`w-full p-5 min-h-screen`}>
      <Title />
      <div className="mt-4 w-full overflow-x-auto">
        <div className="flex gap-10 min-w-[95rem]">
          <ToDoList />
          <InProgress />
          <Done />
          <Revised />
        </div>
      </div>
    </div>
  );
};

export default Content;
