import React, { useState } from "react";
import SideBar from "./SideBar";
import {
  downArrowNavIcon2,
  bellIcon,
  classRoomIcon,
  checkBoxIcon,
  calendarIcon2,
  dashboardIcon,
  emailIcon,
  chatIcon,
  kanbanIcon,
  contactIcon,
  calendarIcon,
  coursesIcon,
  shopIcon,
  invoicesIcon,
  settingsIcon,
  rightArrow,
  downArrow,
  nineDots,
  rightCompleteArrow,
} from "@/components/constants";
import SideBarIndComponent from "./Content/SideBarIndComponent";
const NavbarSmallScreen = ({screenWidth}) => {
  const [sidebarIsOpen, setidebarIsOpen] = useState(false);
  const emailRight = (
    <div className="flex items-center gap-2">
      <div className="p-[2px] px-1 rounded-[50%] bg-[#5dcfff] text-[10px]">
        10
      </div>
      {downArrow}
    </div>
  );
  const contactRight = (
    <div className="flex items-center gap-2">
      <div className="bg-[#e328af] text-white p-[2px] px-[10px] rounded-[20px] text-[14px]">
        New
      </div>
    </div>
  );
  const kanbanRight = <div>{rightArrow}</div>;
  return (
    <div className="flex items-center justify-between p-3 px-5 bg-[#15132b] ">
      {sidebarIsOpen && (
        <div className={`fixed left-0 top-0 bottom-0 ${screenWidth<640?'w-[70%]':'w-[35%]'} flex flex-col outline-none outline-offset-2 z-[1400] h-screen max-w-xs bg-[#15132b] `}>
          <div className="flex items-center justify-between p-4 ps-3 pe-3">
            <p className="text-[18px] text-white">weframetech</p>
            <div
              className="cursor-pointer"
              onClick={() => setidebarIsOpen(false)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="white"
                style={{ color: "white" }}
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"></path>
              </svg>
            </div>
          </div>
          <div className="ps-6 pe-6 pt-2 pb-2 flex flex-grow flex-shrink basis-0 overflow-auto flex-col gap-6">
            <div className="w-full flex relative isolate rounded-[10px]">
              <div className="left-3 w-10 h-10 text-base absolute top-3 z-[2] pointer-events-none ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  color="#7879f1"
                  style={{ color: "rgb(120, 121, 241)" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </div>
              <input
                className="w-full h-10 text-base ps-10 pe-4 min-w-0 outline-none outline-offset-2 relative appearance-none rounded-[20px] bg-[#211a75] text-[#aaaaaa]"
                placeholder="Search Here"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="relative cursor-pointer">
                {bellIcon}
                <div className="flex item justify-center absolute w-[20px] h-[20px] top-[-5px] right-[-5px] p-[2px] px-[4px] rounded-[50%] bg-[#5dcfff] text-[10px]">
                  12
                </div>
              </div>
              <div className="relative cursor-pointer">
                {classRoomIcon}
                <div className="flex item justify-center absolute w-[20px] h-[20px] top-[-5px] right-[-5px] p-[2px] px-[4px] rounded-[50%] bg-[#5dcfff] text-[10px]">
                  5
                </div>
              </div>
              <div className="relative cursor-pointer">
                {checkBoxIcon}
                <div className="flex item justify-center absolute w-[20px] h-[20px] top-[-5px] right-[-5px] p-[2px] px-[4px] rounded-[50%] bg-[#5dcfff] text-[10px]">
                  2
                </div>
              </div>
              <div className="relative cursor-pointer">
                {calendarIcon2}
                <div className="flex item justify-center absolute w-[20px] h-[20px] top-[-5px] right-[-5px] p-[2px] px-[4px] rounded-[50%] bg-[#e328af] text-[10px]">
                  !
                </div>
              </div>
            </div>
            <div className="px-7 flex flex-col gap-7 p-2">
              <div className="text-white">
                <p className="mainMenuText">MAIN MENU</p>
              </div>
              <div className="flex flex-col gap-5">
                <SideBarIndComponent
                  leftIcon={dashboardIcon}
                  text={"Dashboard"}
                  innerColour={"#464366"}
                />
                <SideBarIndComponent
                  leftIcon={emailIcon}
                  text={"Email"}
                  rightCmp={emailRight}
                  innerColour={"#464366"}
                />
                <SideBarIndComponent
                  leftIcon={chatIcon}
                  text={"Chat"}
                  innerColour={"#7879f1"}
                />
                <SideBarIndComponent
                  leftIcon={kanbanIcon}
                  text={"Kanban"}
                  rightCmp={kanbanRight}
                  innerColour={"#7879f1"}
                />
                <SideBarIndComponent
                  leftIcon={contactIcon}
                  text={"Contact"}
                  innerColour={"#7879f1"}
                  rightCmp={contactRight}
                />
                <SideBarIndComponent
                  leftIcon={calendarIcon}
                  text={"Calendar"}
                  innerColour={"#7879f1"}
                />
                <SideBarIndComponent
                  leftIcon={coursesIcon}
                  text={"Courses"}
                  innerColour={"#6418c3"}
                  rightCmp={rightArrow}
                />
                <SideBarIndComponent
                  leftIcon={shopIcon}
                  text={"Shop"}
                  innerColour={"#6418c3"}
                />
                <SideBarIndComponent
                  leftIcon={invoicesIcon}
                  text={"Invoices"}
                  innerColour={"#6418c3"}
                  rightCmp={rightArrow}
                />
                <SideBarIndComponent
                  leftIcon={settingsIcon}
                  text={"Settings"}
                  innerColour={"#6418c3"}
                />
              </div>
              <div className="px-7 mt-2">
                <div className="flex flex-col relative overflow-hidden w-full p-3 px-5 bg-[#0d82da] rounded-[10px]">
                  <div className="absolute w-[150px] h-[150px] bg-[#37b6f2] rounded-[50%] b-[-75px] right-[-75px]"></div>
                  {nineDots}
                  <p className="text-[16px] z-[2]">Increase your</p>
                  <p className="text-[16px] z-[2]">work with kanban</p>
                  {rightCompleteArrow}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={sidebarIsOpen ? "hidden" : "block"}>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={() => setidebarIsOpen(true)}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              style={{ color: "#7879f1", fontWeight: "600" }}
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="text-[18px] text-white">weframetech</div>
        </div>
      </div>
      <div
        className={`${sidebarIsOpen ? "hidden" : "flex"} items-center gap-3`}
      >
        <div className="py-5 border-[1px] border-solid border-[#1e1c3a]"></div>
        <div className="p-5 bg-[#c4c4c4] rounded-[10px]"></div>
        <div>
          <p className="text-[9px]">Instructor Day</p>
          <p className="text-[9px] text-[#7879f1]">Super Admin</p>
        </div>
        {downArrowNavIcon2}
      </div>
    </div>
  );
};

export default NavbarSmallScreen;
