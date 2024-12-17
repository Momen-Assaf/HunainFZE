import { facebookIcon, instagramIcon, linkedInIcon, logo } from "../assets";
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
                <div className="flex flex-col lg:flex-row justify-between gap-8 items-center pb-5">

                    {/* Logo Section */}
                    <div className="flex flex-row items-start gap-4 ">
                        <img
                            className="h-12 lg:h-14 object-cover"
                            alt="Logo"
                            src={logo}
                        />
                    </div>
                    <div className="flex flex-row items-end gap-5">
                        <div className="flex gap-20 pe-5">
                            <ScrollableText text="Privacy Policy" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                            <ScrollableText text="Terms of Service" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                        </div>
                        <img src={facebookIcon} className="w-[30px]" />
                        <img src={instagramIcon} className="w-[30px]" />
                        <img src={linkedInIcon} className="w-[30px]" />
                    </div>

                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center border-t-2">
                    {/* Row Section */}
                    <div className="flex flex-row lg:gap-16 gap-5 items-start lg:py-7 py-5">
                        <ScrollableText text="About Us" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                        <ScrollableText text="Contact Us" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                        <ScrollableText text="FAQs" size={theme.fontSize.medium} font={theme.fonts.secondary} />
                        <ScrollableText text="Services" size={theme.fontSize.medium} font={theme.fonts.secondary} />

                    </div>
                    <div className="items-end lg:py-7 py-5"
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
