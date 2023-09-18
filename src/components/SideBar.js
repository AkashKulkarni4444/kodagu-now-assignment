import React from "react";
import styles from "./SideBar.css";
import SideBarIndComponent from "./Content/SideBarIndComponent";
import {
  menu,
  dashboardIcon,
  emailIcon,
  chatIcon,
  kanbanIcon,
  contactIcon,
  coursesIcon,
  calendarIcon,
  shopIcon,
  invoicesIcon,
  settingsIcon,
  downArrow,
  rightArrow,
  nineDots,
  rightCompleteArrow,
} from "./constants";
const SideBar = () => {
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
    <div className="block w-[17%] fixed mt-0 ml-0 z-10 text-white bg-[#15132b] h-screen"  >
      <div className="flex flex-col w-full height-[100vh] text-white bg-[#15132b]">
        <div className="flex items-center pl-7 p-5 gap-5">
          <p className="m-0 weframetechText">weframetech</p>
          <div>{menu}</div>
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
  );
};

export default SideBar;
