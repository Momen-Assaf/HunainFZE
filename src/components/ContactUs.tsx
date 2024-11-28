import theme from "../theme";

const ContactUs = () => {
    return (
        <section className="py-[120px]" id="contactUs">
            <div className="relative w-full max-w-screen-xl mx-auto py-16">
                {/* Header */}
                <div className="text-center mb-[90px]">
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
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        {/* First Name */}
                        <input
                            id="first-name"
                            type="text"
                            className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            style={{
                                width: "500px",
                                height: "60px",
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
                            className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            style={{
                                width: "500px",
                                height: "60px",
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.textLight,
                                borderRadius: theme.borderRadius.md,
                                fontSize: theme.fontSize.paragraph,
                                fontWeight: theme.fontWeight.medium,
                            }}
                            placeholder="Last Name"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-5">
                        {/* Mobile Number */}
                        <input
                            id="mobile-number"
                            type="tel"
                            className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            style={{
                                width: "500px",
                                height: "60px",
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
                            className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            style={{
                                width: "500px",
                                height: "60px",
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
                        className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        style={{
                            width: "1020px",
                            height: "350px",
                            backgroundColor: theme.colors.primaryLightWithOpacity,
                            color: theme.colors.textLight,
                            borderRadius: theme.borderRadius.md,
                            fontSize: theme.fontSize.paragraph,
                            fontWeight: theme.fontWeight.medium,
                        }}
                        placeholder="Your Message"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
