import React from "react";
import iconArrowRight from "./icon-arrow-right.png";
import image from "./image.png";

export const Box = (): JSX.Element => {
  return (
    <div className="relative w-60 h-[170px]">
      <div className="fixed w-60 h-[170px] top-0 left-0 rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
        <div className="top-5 absolute w-[200px] h-[55px] left-5 bg-[#01eeff] rounded-[15px]">
          <div className="flex w-[200px] h-[55px] items-center justify-center gap-2.5 px-[47px] py-[3px] relative bg-[#01eeff] rounded-[15px]">
            <div className="relative w-fit ml-[-13.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#151925] text-xl tracking-[0] leading-[44px] whitespace-nowrap">
              Contact Us
            </div>

            <img
              className="relative w-4 h-4 mr-[-14.50px]"
              alt="Icon arrow right"
              src={image}
            />
          </div>
        </div>

        <div className="top-[95px] absolute w-[200px] h-[55px] left-5 bg-[#01eeff] rounded-[15px]">
          <div className="flex w-[200px] h-[55px] items-center justify-center gap-2.5 px-[47px] py-[3px] relative bg-[#01eeff] rounded-[15px]">
            <div className="relative w-fit ml-[-13.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#151925] text-xl tracking-[0] leading-[44px] whitespace-nowrap">
              Contact Us
            </div>

            <img
              className="relative w-4 h-4 mr-[-14.50px]"
              alt="Icon arrow right"
              src={iconArrowRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
