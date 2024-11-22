import React from "react";
import { BluebirdSmall } from "./BluebirdSmall";
import { ContactUs } from "./components/ContactUs"
import { Home } from "./Home";
import { WebDevelopment } from "./WebDevelopment";
import effect from "./effect.svg";
import iconArrowRight from "./icon-arrow-right.png";
import image1 from "./image-1.png";
import image2 from "./image-2.png";
import image from "./image.svg";
import rectangle142 from "./rectangle-14-2.png";
import vector2 from "./vector-2.svg";

export const FinalDraft = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[4400px] relative">
        

        <div className="absolute w-[1442px] h-[1801px] top-[899px] -left-px">
          

          <div className="absolute w-[1442px] h-[902px] top-0 left-0 bg-white border border-solid border-neutral-50 shadow-[0px_2px_0px_#00000040]">
            <div className="relative w-[1131px] h-[500px] top-[200px] left-[148px]">
              <div className="flex w-[1176px] h-[500px] items-start gap-[140px] relative">
                <div className="flex flex-col w-[522px] h-[500px] items-start gap-[35px] relative">
                  <div className="relative self-stretch w-full h-[92px]">
                    <p className="absolute w-[482px] -top-px left-0 [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-transparent text-4xl tracking-[0] leading-[normal]">
                      <span className="text-[#363636]">About </span>

                      <span className="text-[#1e407d]">Us</span>
                    </p>

                    <div className="absolute w-[482px] top-[60px] left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#1e407d] text-[28px] tracking-[0] leading-[normal]">
                      Tech Development Agency
                    </div>
                  </div>

                  <p className="relative w-[451px] h-[226px] [font-family:'Inter-Light',Helvetica] font-light text-[#363636] text-2xl tracking-[0] leading-[normal]">
                    Lorem ipsum dolor sit amet consectetur. Elementum nibh
                    vulputate facilisis varius donec lobortis. Tempus orci nisi
                    varius ac. Tellus eleifend donec imperdiet ac a vitae
                    consectetur. Vitae faucibus lacus metus vitae vitae nunc
                    blandit.
                  </p>

                  <ContactUs
                    className="!h-11 !relative !bg-[#1e407d] !w-[150px]"
                    divClassName="!mr-[-9.00px] !mt-[-4.00px] !text-white !ml-[-9.00px] !text-base !mb-[-2.00px]"
                    frameClassName="!h-11 !bg-[#1e407d] !w-[150px]"
                    hasIconArrowRight={false}
                    property1="default"
                    text="See More"
                  />
                </div>

                <div className="relative w-[484px] h-[432px] bg-[#1e407d80] rounded-[100px] overflow-hidden">
                  <img
                    className="absolute w-[350px] h-[350px] top-[41px] left-[67px] object-cover"
                    alt="Image"
                    src={image2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[2724px] h-[860px] top-0 left-[-244px]">
          <div className="absolute w-[1440px] h-[272px] top-0 left-[244px]">
            <div className="h-[110px] bg-[#fbfbfb] rounded-[4px_4px_25px_25px] overflow-hidden">
              <div className="flex w-[1262px] items-center justify-between relative top-[7px] left-[89px]">
                <div className="flex w-[100px] h-[100px] items-center gap-2.5 px-[11px] py-[7px] relative">
                  <img
                    className="relative w-[100px] h-[100px] mt-[-7.00px] mb-[-7.00px] mr-[-22.00px] object-cover"
                    alt="Image"
                    src={image1}
                  />
                </div>

                <div className="relative w-[698px] h-[55px]">
                  <Home
                    className="!absolute !left-0 !top-4"
                    divClassName="!text-[#363636]"
                    property1="default"
                  />
                  <Home
                    className="!absolute !left-[117px] !w-[88px] !top-4"
                    divClassName="!text-[#363636]"
                    property1="default"
                    text="About us"
                  />
                  <Home
                    className="!absolute !left-[265px] !top-4"
                    divClassName="!text-[#363636] !-left-3.5"
                    property1="default"
                    text="Services"
                  />
                  <Home
                    className="!absolute !left-[382px] !w-[83px] !top-4"
                    divClassName="!text-[#363636]"
                    property1="default"
                    text="Portfolio"
                  />
                  <div className="w-[173px] px-[47px] py-1 absolute top-0 left-[525px] overflow-hidden flex h-[55px] items-center justify-center gap-2.5 bg-[#1e407d] rounded-[15px]">
                    <div className="relative w-fit ml-[-26.50px] mr-[-3.50px] [text-shadow:0px_2px_2px_#00000040] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[44px] whitespace-nowrap">
                      Contact Us
                    </div>

                    <img
                      className="relative w-4 h-4 mr-[-28.00px]"
                      alt="Icon arrow right"
                      src={iconArrowRight}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[2724px] h-[750px] top-[110px] left-0">
            <img
              className="absolute w-[1440px] h-[413px] top-[375px] left-[244px] object-cover"
              alt="Effect"
              src={effect}
            />

            <div className="absolute w-[1241px] h-[235px] top-[104px] left-[336px]">
              <div className="flex flex-col w-[555px] items-start gap-[9px] absolute top-0 left-0">
                <p className="relative self-stretch h-[235px] mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-Medium',Helvetica] font-normal text-transparent text-8xl tracking-[0] leading-[normal]">
                  <span className="font-medium text-[#363636]">
                    From Idea to{" "}
                  </span>

                  <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#1e407d]">
                    Delivery
                  </span>
                </p>
              </div>

              <div className="flex flex-col w-[588px] h-[199px] items-start gap-2.5 absolute top-[18px] left-[653px]">
                <p className="relative self-stretch h-[134px] mt-[-1.00px] [font-family:'Inter-Light',Helvetica] font-light text-[#363636] text-[32px] tracking-[0] leading-[44px]">
                  Unlock the full potential of your project with Hunain FZE.
                </p>

                <ContactUs
                  className="!relative !bg-[#1e407d]"
                  divClassName="!text-white"
                  frameClassName="!bg-[#1e407d]"
                  iconArrowRight="icon-arrow-right-4.png"
                  property1="default"
                  text="Contact Us"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[1440px] h-[800px] top-[2700px] left-0 bg-white">
          <p className="absolute w-[234px] top-[120px] left-[603px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-transparent text-4xl text-center tracking-[0] leading-[normal]">
            <span className="text-[#363636]">Our </span>

            <span className="text-[#1e407d]">Projects</span>
          </p>

          <div className="absolute w-[1157px] h-[420px] top-64 left-[141px]">
            <div className="relative h-[420px]">
              <BluebirdSmall
                className="!absolute bg-[url(/rectangle-14-3.png)] !left-[557px] !top-[143px]"
                property1="default"
              />
              <div className="absolute w-[600px] h-[274px] top-[73px] left-[25px] bg-[#363636] rounded-[15px] rotate-[-15.00deg]">
                <img
                  className="absolute w-[644px] h-[413px] top-[-70px] left-[-22px] rotate-[15.00deg]"
                  alt="Rectangle"
                  src={rectangle142}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
