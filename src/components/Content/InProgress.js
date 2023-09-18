import React from 'react'
import CardComponent from './CardComponent'
import TiltedCardComponent from './TiltedCardComponent'
import { mainContentPlusIcon2 } from '../constants'
const InProgress = () => {
  return (
    <div className="flex flex-col w-[275px] gap-5">
      <div className="flex w-full justify-between items-center ps-3 pe-3">
        <p>In Progress(2)</p>
        <div className="p-2 rounded-[10px] bg-[#211a75] cursor-pointer">
          {mainContentPlusIcon2}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <CardComponent
          header={"Video"}
          description={"Create sparring tutorial video for the weekly class."}
          headerColour={"teal"}
          barColour={"#319795"}
          barPercentage={85}
        />
        <TiltedCardComponent
          header={"BUGS FIXING"}
          description={"Payment gateway needs reauthorization."}
          headerColour={"#ff4a55"}
          barColour={"#ff4a55"}
          barPercentage={95}
        />
      </div>
    </div>
  )
}

export default InProgress