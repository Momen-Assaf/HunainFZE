import ServiceCard from "./ServiceCard";
import { codeIcon, mobileIcon, designIcon } from "../../../assets";
import theme from "../../../theme";

const OurServices = () => {
    return (
        <section className="py-16" id="ourServices">
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
                    title="Web Development"
                    description="Design and develop cutting-edge web solutions."
                    iconSrc={codeIcon}
                />
                <ServiceCard
                    title="UX-UI Design"
                    description="Craft intuitive and user-friendly designs."
                    iconSrc={designIcon}
                />
                <ServiceCard
                    title="Mobile Development"
                    description="Build robust and scalable mobile applications."
                    iconSrc={mobileIcon}
                />
            </div>
        </section>
    );
};

export default OurServices;
