import theme from "../theme";
import CustomButton from "./CustomButton";

const ContactUs = () => {
    return (
        <section className="py-[120px] w-11/12 lg:w-3/4 mx-auto" id="contactUs">
            <div className="relative py-16">
                {/* Header */}
                <div className="text-center mb-[60px]">
                    <h2
                        style={{
                            fontFamily: theme.fonts.primary,
                            fontSize: theme.fontSize.heading1,
                            fontWeight: theme.fontWeight.extraBold,
                        }}
                    >
                        <span style={{ color: theme.colors.textDark }}>Contact </span>
                        <span style={{ color: theme.colors.primary }}>Us!</span>
                    </h2>
                </div>

                {/* Form container */}
                <div className="flex flex-col items-center gap-6">
                    <div className="w-full flex flex-col md:flex-row items-center gap-5">
                        {/* First Name */}
                        <input
                            id="first-name"
                            type="text"
                            className="w-full lg:w-1/2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            style={{
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.textLight,
                                borderRadius: theme.borderRadius.md,
                                fontSize: theme.fontSize.paragraph,
                                fontWeight: theme.fontWeight.medium,
                            }}
                            placeholder="First Name"
                        />

                        {/* Last Name */}
                        <input
                            id="last-name"
                            type="text"
                            className="w-full lg:w-1/2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            style={{
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.textLight,
                                borderRadius: theme.borderRadius.md,
                                fontSize: theme.fontSize.paragraph,
                                fontWeight: theme.fontWeight.medium,
                            }}
                            placeholder="Last Name"
                        />
                    </div>

                    <div className="w-full flex flex-col md:flex-row items-center gap-5">
                        {/* Mobile Number */}
                        <input
                            id="mobile-number"
                            type="tel"
                            className="w-full lg:w-1/2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            style={{
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.textLight,
                                borderRadius: theme.borderRadius.md,
                                fontSize: theme.fontSize.paragraph,
                                fontWeight: theme.fontWeight.medium,
                            }}
                            placeholder="Mobile Number"
                        />

                        {/* Email Address */}
                        <input
                            id="email"
                            type="email"
                            className="w-full lg:w-1/2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            style={{
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.textLight,
                                borderRadius: theme.borderRadius.md,
                                fontSize: theme.fontSize.paragraph,
                                fontWeight: theme.fontWeight.medium,
                            }}
                            placeholder="Email Address"
                        />
                    </div>

                    {/* Message */}
                    <textarea
                        id="message"
                        className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        style={{
                            backgroundColor: theme.colors.primaryLightWithOpacity,
                            color: theme.colors.textLight,
                            borderRadius: theme.borderRadius.md,
                            fontSize: theme.fontSize.paragraph,
                            fontWeight: theme.fontWeight.medium,
                        }}
                        placeholder="Your Message"
                        rows={5}
                    />

                    <CustomButton
                        text="Send Message"
                        buttonClass="w-[200px] h-[55px] mt-3"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
