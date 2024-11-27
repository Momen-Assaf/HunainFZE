import ServiceCard from "./ServiceCard";
import { codeIcon, mobileIcon, designIcon } from "../../../assets";
import theme from "../../../theme";

const OurProjects = () => {
    return (
        <section className="py-[120px]" id="ourProjects">
            {/* Header */}
            <div className="text-center mb-[90px]">
                <h2
                    style={{
                        fontFamily: theme.fonts.primary,
                        fontSize: theme.fontSize.heading1,
                        fontWeight: theme.fontWeight.extraBold,
                    }}
                >
                    <span style={{ color: theme.colors.textDark }}>Our </span>
                    <span style={{ color: theme.colors.primary }}>Projects</span>
                </h2>
            </div>

        </section>
    );
};

export default OurProjects;
