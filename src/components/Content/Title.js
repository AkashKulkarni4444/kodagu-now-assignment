import React from "react";
import {
  leftArrowTitleIcon,
  invitePeopleIcon,
  messagesIcon,
  threeVerticalDotsIcon,
} from "@/components/constants";
import companyLogo from "../companyLogo.png";
const Title = () => {
  return (
    <div className="w-full flex justify-between bg-[#15132b] ps-5 pe-5 p-7 rounded-[12px]">
      <div className="flex gap-2 items-start w-full">
        <div className="block">
          <div className="bg-[#a5a5a5] p-1 rounded-[50%] cursor-pointer">
            {leftArrowTitleIcon}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex w-full justify-between">
            <div className="flex flex-col items-start justify-start gap-2">
              <p className="font-semibold text-white text-[20px]">
                School November Tasks
              </p>
              <p className="text-white text-[12px]">
                Created by Instructor Day on November 31, 2022
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <p className="text-[14px] font-medium text-white">
                  Centered Martial Arts
                </p>
                <p className="text-[12px] text-[#a5a5a5]">Sunnyvale, Ca</p>
              </div>
              <img
                width="35"
                height="35"
                src={companyLogo.src}
                alt="circled"
              ></img>
            </div>
          </div>
          <div className="inline-flex justify-between">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center justify-end flex-row-reverse text-black cursor-pointer">
                <span className="rounded-full z-[5] ms-[-0.75rem] inline-flex items-center justify-center text-center uppercase font-medium relative flex-shrink-0 bg-pink-500 text-[0.8rem] w-[2rem] h-[2rem]">
                  5+
                </span>
                <span className="rounded-full z-[4] border-2 inline-flex items-center justify-center text-center uppercase font-medium relative flex-shrink-0 text-[0.8rem] text-white border-white w-[2rem] h-[2rem] me-[0rem]">
                  <img
                    src="https://bit.ly/prosper-baba"
                    alt="Prosper Otemuyiwa"
                    className="w-full h-full object-cover rounded-full"
                  />
                </span>
                <span className="rounded-full z-[3] border-2 inline-flex items-center justify-center text-center uppercase font-medium relative flex-shrink-0 text-[0.8rem] text-white border-white w-[2rem] h-[2rem] me-[-0.75rem]">
                  <img
                    src="https://bit.ly/kent-c-dodds"
                    alt="Kent Dodds"
                    className="w-full h-full object-cover rounded-full"
                  />
                </span>
                <span className="rounded-full z-[2] border-2 inline-flex items-center justify-center text-center uppercase font-medium relative flex-shrink-0 text-[0.8rem] text-white border-white w-[2rem] h-[2rem] me-[-0.75rem]">
                  <img
                    src="https://bit.ly/sage-adebayo"
                    alt="Kent Dodds"
                    className="w-full h-full object-cover rounded-full"
                  />
                </span>
                <span className="rounded-full z-[1] border-2 inline-flex items-center justify-center text-center uppercase font-medium relative flex-shrink-0 text-[0.8rem] text-white border-white w-[2rem] h-[2rem] me-[-0.75rem]">
                  <img
                    src="https://bit.ly/ryan-florence"
                    alt="Kent Dodds"
                    className="w-full h-full object-cover rounded-full"
                  />
                </span>
              </div>
              <div className="flex items-center gap-1 p-2 rounded-[10px] bg-[#6418c3] cursor-pointer">
                {invitePeopleIcon}
                <p className="font-medium text-[14px] pl-[0.25rem]">
                  Invite People
                </p>
              </div>
              <div className="flex items-center p-2 px-4 rounded-[10px] border-[#6418c3] border-[1px] border-solid cursor-pointer">
                <p className="text-[14px] font-medium">Private</p>
              </div>
              <div className="flex items-center p-2 px-4 rounded-[10px] bg-[#7879f1] cursor-pointer">
                <p className="text-[14px] font-medium">Edit</p>
              </div>
              <div className="flex items-center gap-1 p-2 rounded-[10px] border-[1px] border-solid border-[#6418c3] cursor-pointer">
                {messagesIcon}
                <p className="text-[14px]">45 Comments</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[13px] font-medium">Total Progress 60%</p>
                <div className="w-[300px]">
                  <div className="overflow-hidden relative bg-gray-100 h-3 rounded-[20px]">
                    <div
                      className="w-[60%] h-full bg-purple-500 rounded-[20px]"
                      aria-valuemax={100}
                      aria-valuemin={0}
                      aria-valuenow={60}
                      role="progressbar"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-2">{threeVerticalDotsIcon}</div>
    </div>
  );
};

export default Title;
