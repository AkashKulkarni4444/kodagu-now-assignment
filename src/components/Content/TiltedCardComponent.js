import React from 'react'
import { threeHorizontalDotsIcon,timerIcon } from '../constants';
import './tiltedcss.css'
const TiltedCardComponent = ({
    header,
  headerColour,
  description,
  barPercentage,
  barColour,
}) => {
  return (
    <div className="w-full min-h-[200px] bg-[#070519] rounded-[16px] relative z-5">
      <div className="flex flex-col gap-5 w-full min-h-[200px] p-3 bg-[#211a75] rounded-[16px] absolute top-[30px] left-[25px] rotate-6 tiltedShadow ">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`text-${headerColour}`}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                color="yellow"
                style={{ color: `${headerColour}` }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
              </svg>
            </div>
            <p style={{ color: `${headerColour}` }}>{header}</p>
          </div>
          <div className="cursor-pointer">{threeHorizontalDotsIcon}</div>
        </div>

        <div className="w-full">
          <p className="text-[13px] text-white">{description}</p>
        </div>

        <div className="w-full">
          <div className="overflow-hidden relative bg-gray-100 h-2 rounded-[10px]">
            <div
              className={`h-full rounded-[10px]`}
              style={{
                width: `${barPercentage}%`,
                backgroundColor: `${barColour}`,
              }}
              aria-valuemax={"100"}
              aria-valuemin={"0"}
              aria-valuenow={`${barPercentage}`}
              role="progressbar"
            ></div>
          </div>
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="flex items-center justify-end flex-row-reverse " role="group" >
            <span className="rounded-full border-[2px] inline-flex items-center justify-center text-center uppercase font-medium relative flex-shrink-0 text-[0.6rem] text-gray-800 border-white w-6 h-6 me-0">
              <img
                src="https://bit.ly/code-beast"
                alt="Christian Nwamba"
                className="w-full h-full object-cover rounded-full"
              ></img>
            </span>
            <span className="rounded-full border-[2px] inline-flex items-center justify-center text-center uppercase font-medium relative flex-shrink-0 text-[0.6rem] text-gray-800 border-white w-6 h-6 me-[-0.75rem]">
              <img
                src="https://bit.ly/kent-c-dodds"
                alt="Kent Dodds"
                className="w-full h-full object-cover rounded-full"
              ></img>
            </span>
            <span className="rounded-full border-[2px] inline-flex items-center justify-center text-center uppercase font-medium relative flex-shrink-0 text-[0.6rem] text-gray-800 border-white w-6 h-6 me-[-0.75rem]">
              <img
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
                className="w-full h-full object-cover rounded-full"
              ></img>
            </span>
            <span className="rounded-full border-[2px] inline-flex items-center justify-center text-center uppercase font-medium relative flex-shrink-0 text-[0.6rem] text-gray-800 border-white w-6 h-6 me-[-0.75rem]">
              <img
                src="https://bit.ly/ryan-florence"
                alt="Ryan Florence"
                className="w-full h-full object-cover rounded-full"
              ></img>
            </span>
          </div>
          
          <div className="flex items-center gap-1" >
          {timerIcon}
          <p className="text-[12px] text-[#a5a5a5]" >Due in 4 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TiltedCardComponent