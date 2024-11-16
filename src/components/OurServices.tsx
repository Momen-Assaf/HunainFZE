const OurServices = () => {
    return (
        <div className="absolute w-[1440px] h-[900px] top-[901px] left-px">
            <div className="absolute w-[1150px] h-[506px] top-[255px] left-[145px]">
                <div className="absolute w-[400px] h-[400px] top-[106px] left-[750px]">
                    <div className="relative w-[402px] h-[402px] -top-px -left-px rounded-[25px]">
                        <WebDevelopment
                            className="!shadow-[4px_4px_1px_#f0f0f0] !absolute !left-0 !bg-white !top-0"
                            divClassName="!text-[#363636]"
                            divClassNameOverride="!text-[#363636]"
                            hasVector={false}
                            property1="default"
                            text="Mobile Development"
                        />
                        <img
                            className="absolute w-8 h-[45px] top-[53px] left-[185px]"
                            alt="Vector"
                            src={image}
                        />
                    </div>
                </div>

                <div className="absolute w-[400px] h-[400px] top-[106px] left-0">
                    <div className="relative w-[402px] h-[402px] -top-px -left-px rounded-[25px]">
                        <WebDevelopment
                            className="!shadow-[4px_4px_1px_#f0f0f0] !absolute !left-0 !bg-white !top-0"
                            divClassName="!text-[#363636]"
                            divClassNameOverride="!text-[#363636]"
                            hasVector={false}
                            property1="default"
                            text="UX-UI Design"
                        />
                        <img
                            className="absolute w-11 h-[45px] top-[53px] left-[179px]"
                            alt="Vector"
                            src={vector2}
                        />
                    </div>
                </div>

                <WebDevelopment
                    className="!shadow-[4px_4px_1px_#f0f0f0] !absolute !left-[374px] !bg-white !top-0"
                    divClassName="!text-[#363636]"
                    divClassNameOverride="!text-[#363636]"
                    property1="default"
                    text="Web Development"
                    vector="vector-4.svg"
                />
            </div>

            <p className="absolute w-[232px] top-[119px] left-[604px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-transparent text-4xl tracking-[0] leading-[normal]">
                <span className="text-[#363636]">Our </span>

                <span className="text-[#1e407d]">Services</span>
            </p>
        </div>
    )
}

export default OurServices