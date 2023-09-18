import React from "react";

const SideBarIndComponent = ({ leftIcon, text, rightCmp, innerColour }) => {
  return (
    <div className="flex items-center justify-between w-full ">
      <div className={`flex items-center gap-3 align-middle text-[${innerColour}]`}>
        {leftIcon}
        <p>{text}</p>
      </div>
      {rightCmp && <div>{rightCmp}</div>}
    </div>
  );
};

export default SideBarIndComponent;
