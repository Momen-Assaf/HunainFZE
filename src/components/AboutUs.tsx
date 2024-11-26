import React from 'react'
import CustomButton from './CustomButton'

const AboutUs = () => {
    return (
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

                            <CustomButton
                                buttonClass='!h-11 !relative !bg-[#1e407d] !w-[150px]'
                                text='See More'
                            />

                            {/* <ContactUs
                                className="!h-11 !relative !bg-[#1e407d] !w-[150px]"
                                divClassName="!mr-[-9.00px] !mt-[-4.00px] !text-white !ml-[-9.00px] !text-base !mb-[-2.00px]"
                                frameClassName="!h-11 !bg-[#1e407d] !w-[150px]"
                                hasIconArrowRight={false}
                                property1="default"
                                text="See More"
                            /> */}
                        </div>

                        <div className="relative w-[484px] h-[432px] bg-[#1e407d80] rounded-[100px] overflow-hidden">
                            <img
                                className="absolute w-[350px] h-[350px] top-[41px] left-[67px] object-cover"
                                alt="Image"
                                src=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs