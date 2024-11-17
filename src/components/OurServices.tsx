import ServiceCard from "./ServiceCard";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";

const OurServices = () => {
    return (
        <div className="absolute w-[1440px] h-[900px] top-[901px] left-px">
            <div className="absolute w-[1150px] h-[506px] top-[255px] left-[145px]">
                {/* Mobile Development */}
                <div className="absolute w-[400px] h-[400px] top-[106px] left-[750px]">
                    <ServiceCard
                        title="Mobile Development"
                        description="Build robust and scalable mobile applications."
                        iconSrc={icon1} // Updated prop name
                    />
                </div>

                {/* UX-UI Design */}
                <div className="absolute w-[400px] h-[400px] top-[106px] left-0">
                    <ServiceCard
                        title="UX-UI Design"
                        description="Craft intuitive and user-friendly designs."
                        iconSrc={icon2} // Updated prop name
                    />
                </div>

                {/* Web Development */}
                <div className="absolute w-[400px] h-[400px] top-0 left-[374px]">
                    <ServiceCard
                        title="Web Development"
                        description="Design and develop cutting-edge web solutions."
                        iconSrc={icon3} // Updated prop name
                    />
                </div>
            </div>

            {/* Header */}
            <p className="absolute w-[232px] top-[119px] left-[604px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-transparent text-4xl tracking-[0] leading-[normal]">
                <span className="text-[#363636]">Our </span>
                <span className="text-[#1e407d]">Services</span>
            </p>
        </div>
    );
};

export default OurServices;
