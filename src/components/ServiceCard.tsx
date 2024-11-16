import React from "react";
import image from "./image.svg";
import vector from "./vector.svg";

export const Box = (): JSX.Element => {
  return (
    <div className="relative w-[440px] h-[860px]">
      <div className="fixed w-[440px] h-[860px] top-0 left-0 rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
        <div className="w-[402px] h-[402px] top-[19px] left-[19px] border border-solid border-[#00000040] shadow-[4px_4px_1px_#151925] absolute bg-[#323846] rounded-[25px]">
          <div className="relative w-[400px] h-[282px] top-[59px]">
            <img
              className="absolute w-[60px] h-[38px] top-0 left-[170px]"
              alt="Vector"
              src={image}
            />

            <div className="absolute w-[400px] top-12 left-0 [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-[32px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Web Development
            </div>

            <p className="absolute w-[350px] top-[117px] left-[25px] [font-family:'Inter-Light',Helvetica] font-light text-white text-2xl text-center tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet consectetur. Pretium ac enim sapien
              egestas aenean dapibus. Diam nunc morbi rutrum aliquam sit sit
              lacus.
            </p>
          </div>
        </div>

        <div className="w-[406px] h-[406px] top-[437px] left-[17px] border-[3px] border-solid border-[#1e407d] absolute bg-[#323846] rounded-[25px]">
          <div className="relative w-[400px] h-[282px] top-[59px]">
            <img
              className="absolute w-[60px] h-[38px] top-0 left-[170px]"
              alt="Vector"
              src={vector}
            />

            <div className="absolute w-[400px] top-12 left-0 [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-[32px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Web Development
            </div>

            <p className="absolute w-[350px] top-[117px] left-[25px] [font-family:'Inter-Light',Helvetica] font-light text-white text-2xl text-center tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet consectetur. Pretium ac enim sapien
              egestas aenean dapibus. Diam nunc morbi rutrum aliquam sit sit
              lacus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
