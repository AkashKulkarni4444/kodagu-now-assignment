import React from "react";

const EmptyCardComponent = ({ description }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full p-5 bg-[#211a75] rounded-[16px]">
        <div className="border-[1px] border-dashed border-[#7879f1] bg-[#15132b] p-3 px-5 rounded-[16px] text-center">
          <p className="text-[14px] text-[#7879f1]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCardComponent;
