import CustomButton from "./CustomButton";
import theme from "../theme";
import { logo } from "../assets";

const AboutUs = () => {
    return (
        <section
            className="w-full bg-white shadow-md py-16"
            id="aboutUs"
            style={{
                backgroundColor: theme.colors.background_primary,
                borderColor: theme.colors.textLight,
                boxShadow: theme.boxShadow.light,
            }}
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-8 py-16">
                {/* Left Section */}
                <div className="flex flex-col flex-1 items-start">
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
                        className="text-lg font-light leading-relaxed text-start"
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

                    {/* Button */}
                    <CustomButton
                        buttonClass="w-[150px] h-[44px]" // Button size
                        text="See More"
                    />
                </div>

                {/* Right Section */}
                <div
                    className="flex-1 flex justify-center items-center bg-opacity-50 ms-[140px] w-[484px] h-[432px]"
                    style={{
                        backgroundColor: `${theme.colors.primary}80`, // 50% opacity of primary
                        borderRadius: theme.borderRadius.xlg,
                    }}
                >
                    <img
                        className="w-[350px] h-[350px] object-cover"
                        alt="About Us Image"
                        src={logo}
                        style={{
                            borderRadius: theme.borderRadius.full,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
