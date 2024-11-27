import ServiceCard from "./ServiceCard";
import { codeIcon, mobileIcon, designIcon } from "../../../assets";
import theme from "../../../theme";

const OurServices = () => {
    return (
        <section className="py-[120px]" id="ourServices">
            {/* Header */}
            <div className="text-center mb-12">
                <h2
                    style={{
                        fontFamily: theme.fonts.primary,
                        fontSize: theme.fontSize.heading1,
                        fontWeight: theme.fontWeight.extraBold,
                    }}
                >
                    <span style={{ color: theme.colors.textDark }}>Our </span>
                    <span style={{ color: theme.colors.primary }}>Services</span>
                </h2>
            </div>

            {/* Cards */}
            <div className="container mx-auto flex flex-wrap justify-center gap-8">
                <ServiceCard
                    title="UX-UI Design"
                    description="Craft user-friendly designs that prioritize user experience. We focus on creating clean, and modern interfaces."
                    iconSrc={designIcon}
                    logoClass="w-[44px] h-[45px]"
                />
                <ServiceCard
                    title="Web Development"
                    description="Develop web solutions that are responsive, fast, and scalable. Our team specializes in creating websites with a focus on clean code, and user experience."
                    iconSrc={codeIcon}
                    logoClass="w-[60px] h-[38px]"
                />
                <ServiceCard
                    title="Mobile Development"
                    description="Build mobile applications tailored to your needs. We develop apps that provide user experiences, integrate the latest technologies."
                    iconSrc={mobileIcon}
                    logoClass="w-[32px] h-[45px]"
                />
            </div>
        </section>
    );
};

export default OurServices;
