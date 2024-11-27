import CustomButton from "./CustomButton";
import theme from "../theme";
import { logo } from "../assets";

const AboutUs = () => {
    return (
        <section
            className="w-full bg-white shadow-md"
            style={{
                backgroundColor: theme.colors.background_primary,
                borderColor: theme.colors.textLight,
                boxShadow: `0px 2px 0px rgba(0, 0, 0, 0.25)`,
            }}
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10 py-16 px-8">
                {/* Left Section */}
                <div className="flex flex-col flex-1 space-y-8">
                    {/* Heading */}
                    <h2
                        className="text-4xl font-extrabold"
                        style={{
                            fontFamily: theme.fonts.primary,
                        }}
                    >
                        <span style={{ color: theme.colors.textDark }}>About </span>
                        <span style={{ color: theme.colors.primary }}>Us</span>
                    </h2>

                    {/* Subheading */}
                    <h3
                        className="text-2xl font-semibold"
                        style={{
                            color: theme.colors.primary,
                            fontFamily: theme.fonts.primary,
                        }}
                    >
                        Tech Development Agency
                    </h3>

                    {/* Paragraph */}
                    <p
                        className="text-lg font-light leading-relaxed"
                        style={{
                            fontFamily: theme.fonts.primary,
                            color: theme.colors.textDark,
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Elementum nibh vulputate
                        facilisis varius donec lobortis. Tempus orci nisi varius ac. Tellus
                        eleifend donec imperdiet ac a vitae consectetur. Vitae faucibus
                        lacus metus vitae vitae nunc blandit.
                    </p>

                    {/* Button */}
                    <CustomButton
                        buttonClass="w-[150px] h-[48px]" // Button size
                        text="See More"
                    />
                </div>

                {/* Right Section */}
                <div
                    className="flex-1 flex justify-center items-center rounded-[50px] bg-opacity-50"
                    style={{
                        backgroundColor: `${theme.colors.primary}80`, // 50% opacity of primary
                        borderRadius: theme.borderRadius.lg,
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
