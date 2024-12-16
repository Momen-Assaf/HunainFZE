import { getTextOfJSDocComment } from "typescript";
import { logo } from "../assets";
import theme from "../theme";
import ScrollableText from "./ScrollableText";

const Footer = () => {
    return (
        <footer className="w-full py-8 shadow-md"
            style={{
                backgroundColor: theme.colors.background_secondary,
                // borderRadius: theme.borderRadius.lg,
            }}>
            <div className="w-11/12 lg:w-3/4 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">

                    {/* Logo Section */}
                    <div className="flex flex-row items-start gap-4 ">
                        <img
                            className="h-12 lg:h-14 object-cover"
                            alt="Logo"
                            src={logo}
                        />
                    </div>
                    <div className="flex flex-row items-end gap-20">
                        <ScrollableText text="Privacy Policy" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                        <ScrollableText text="Terms of Service" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Row Section */}
                    <div className="flex flex-row gap-16 items-start py-10 lg:py-16">
                        <ScrollableText text="About Us" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                        <ScrollableText text="Contact Us" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                        <ScrollableText text="FAQs" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                        <ScrollableText text="Services" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                    </div>
                    <div className="items-end py-10 lg:py-16"
                        style={{
                            fontFamily: theme.fonts.secondary,
                            color: theme.colors.primary,
                        }}>
                        © 2024 Hunain Free Zone Establishment. All rights reserved.
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
