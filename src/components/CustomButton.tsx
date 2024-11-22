const CustomButton = ({ text = "Contact Us", iconSrc = "", buttonClass = "" }) => {
    return (
        <div className={`relative w-60 h-[170px] ${buttonClass}`}>
            <div className="fixed w-60 h-[170px] top-0 left-0 rounded-[5px] overflow-hidden border border-dashed border-[#9747ff]">
                {/* Render button twice if needed */}
                {["top-5", "top-[95px]"].map((position, index) => (
                    <div
                        key={index}
                        className={`absolute w-[200px] h-[55px] left-5 bg-[#01eeff] rounded-[15px] ${position}`}
                    >
                        <div className="flex w-[200px] h-[55px] items-center justify-center gap-2.5 px-[47px] py-[3px] relative bg-[#01eeff] rounded-[15px]">
                            <div className="relative w-fit ml-[-13.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#151925] text-xl tracking-[0] leading-[44px] whitespace-nowrap">
                                {text}
                            </div>
                            {iconSrc && (
                                <img
                                    className="relative w-4 h-4 mr-[-14.50px]"
                                    alt="Icon arrow right"
                                    src={iconSrc}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomButton;
