import CustomButton from "./CustomButton";
import theme from "../theme";
import { logo } from "../assets";

const AboutUs = () => {
    return (
        <section
            className="w-full shadow-md pb-16"
            id="aboutUs"
            style={{
                backgroundColor: theme.colors.background_primary,
                borderColor: theme.colors.textLight,
                boxShadow: theme.boxShadow.light,
            }}
        >
            <div className="w-11/12 lg:w-3/4 mx-auto flex flex-col lg:flex-row items-center gap-10 px-8 py-16">
                {/* Left Section */}
                <div className="flex flex-col flex-1 lg:items-start pb-6">
                    {/* Heading */}
                    <h2
                        style={{
                            fontFamily: theme.fonts.primary,
                            fontSize: theme.fontSize.heading1,
                            fontWeight: theme.fontWeight.extraBold,
                            marginBottom: "10px",
                        }}
                    >
                        <span style={{ color: theme.colors.textDark }}>About </span>
                        <span style={{ color: theme.colors.primary }}>Us</span>
                    </h2>

                    {/* Subheading */}
                    <h3
                        style={{
                            color: theme.colors.primary,
                            fontFamily: theme.fonts.primary,
                            fontSize: theme.fontSize.heading2,
                            fontWeight: theme.fontWeight.semiBold,
                            marginBottom: "35px",
                        }}
                    >
                        Tech Development Agency
                    </h3>

                    {/* Paragraph */}
                    <p
                        className="text-lg font-light leading-relaxed text-center lg:text-start"
                        style={{
                            fontFamily: theme.fonts.primary,
                            color: theme.colors.textDark,
                            fontSize: theme.fontSize.paragraph,
                            fontWeight: theme.fontWeight.light,
                            lineHeight: "1.5",
                            marginBottom: "35px",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Elementum nibh vulputate
                        facilisis varius donec lobortis. Tempus orci nisi varius ac. Tellus
                        eleifend donec imperdiet ac a vitae consectetur. Vitae faucibus
                        lacus metus vitae vitae nunc blandit.
                    </p>

                    <div className="flex justify-center lg:justify-start">
                        {/* Button */}
                        <CustomButton
                            buttonClass="w-[150px] h-[44px]" // Button size
                            text="See More"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex flex-col justify-center items-center lg:ms-[140px] p-10">
                    <img
                        className="object-cover w-full "
                        alt="About Us Image"
                        src={logo}
                        style={{
                            borderRadius: theme.borderRadius.sm,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
