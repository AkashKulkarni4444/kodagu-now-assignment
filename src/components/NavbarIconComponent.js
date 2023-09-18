import React from "react";

const NavbarIconComponent = ({ text, icon, colour }) => {
  return (
    <div className="relative cursor-pointer">
      {icon}
      <div
        className={`flex items-center justify-center absolute w-[20px] h-[20px] top-[-5px] right-[-5px] p-[2px] px-1 rounded-[50%] bg-[${colour}] text-[10px]`}
      >
        {text}
      </div>
    </div>
  );
};

export default NavbarIconComponent;
