"use client";
import SideBar from "./SideBar";
import "./Navbar.css";
import NavbarIconComponent from "@/components/NavbarIconComponent.js";
import {
  searchIcon,
  bellIcon,
  classRoomIcon,
  checkBoxIcon,
  calendarIcon2,
  usaImage,
  downArrowNavIcon,
  downArrowNavIcon2,
} from "@/components/constants";
import { useState, useEffect } from "react";
const Navbar = () => {
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  const size = useWindowSize();
  
  return (
    <div className="flex items-center p-3 px-5 bg-[#15132b] justify-between">
      <div className="block">
        <div
          data-group="true"
          className="w-100 flex flex-wrap flex-row relative isolate p-4 text-base h-10 rounded-[10px] align-middle"
        >
          <div className="left-0 top-0 w-10 h-10 text-base flex items-center justify-center absolute z-[2] pointer-events-none">
            {searchIcon}
          </div>
          <input
            type="text"
            placeholder="Search here"
            className={`w-full h-10 text-base ps-10 pe-12 outline-none outline-offset-2 relative appearance-none m-[-16px] rounded-[20px] bg-[#211a75] text-[#aaaaaa]`}
          />
        </div>
      </div>
      <div className="block">
        <p className="text-[#6418c3] text-[12px] font-semibold underline">
          OTHER MENUS
        </p>
      </div>
      <div className="flex items-center gap-7 ">
        <NavbarIconComponent text={"12"} icon={bellIcon} colour={"#5dcfff"} />
        <NavbarIconComponent
          text={"5"}
          icon={classRoomIcon}
          colour={"#5dcfff"}
        />
        <NavbarIconComponent
          text={"2"}
          icon={checkBoxIcon}
          colour={"#5dcfff"}
        />
        <NavbarIconComponent
          text={"!"}
          icon={calendarIcon2}
          colour={"#e328af"}
        />
      </div>
      <div className="flex items-center gap-1 bg-[#211a75] p-3 px-4 rounded-[50px] cursor-pointer">
        {usaImage}
        <p className="font-semibold text-[14px] text-white">ENGLISH</p>
        {downArrowNavIcon}
      </div>
      <div className="flex items-center gap-3">
        <div className="py-5 border-[1px] border-[#1e1c3a] border-solid"></div>
        <div className="p-5 bg-[#c4c4c4] rounded-[10px]"></div>
        <div className="">
          <p className="text-[12px]">Instructor Day</p>
          <p className="text-[12px] text-[#7879f1]">Super Admin</p>
        </div>
        {downArrowNavIcon2}
      </div>
    </div>
  );
};

export default Navbar;
