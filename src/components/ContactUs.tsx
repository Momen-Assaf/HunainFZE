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
                        <div className="relative">
                            <label
                                htmlFor="first-name"
                                className="absolute left-4 top-1 text-lg font-medium"
                                style={{
                                    color: theme.colors.placeHolderText,
                                }}
                            >
                                First Name
                            </label>
                            <input
                                id="first-name"
                                type="text"
                                className="px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                style={{
                                    width: "500px",
                                    height: "60px",
                                    backgroundColor: theme.colors.primaryLightWithOpacity,
                                    color: theme.colors.placeHolderText,
                                    borderRadius: theme.borderRadius.md,
                                }}
                                placeholder="First Name"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="relative">
                            <label
                                htmlFor="last-name"
                                className="absolute left-4 top-1 text-lg font-medium"
                                style={{
                                    color: theme.colors.placeHolderText,
                                }}
                            >
                                Last Name
                            </label>
                            <input
                                id="last-name"
                                type="text"
                                className="px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                style={{
                                    width: "500px",
                                    height: "60px",
                                    backgroundColor: theme.colors.primaryLightWithOpacity,
                                    color: theme.colors.placeHolderText,
                                    borderRadius: theme.borderRadius.md,
                                }}
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-5">
                        {/* Mobile Number */}
                        <div className="relative">
                            <label
                                htmlFor="mobile-number"
                                className="absolute left-4 top-1 text-lg font-medium"
                                style={{
                                    color: theme.colors.placeHolderText,
                                }}
                            >
                                Mob. Number
                            </label>
                            <input
                                id="mobile-number"
                                type="tel"
                                className="px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                style={{
                                    width: "500px",
                                    height: "60px",
                                    backgroundColor: theme.colors.primaryLightWithOpacity,
                                    color: theme.colors.placeHolderText,
                                    borderRadius: theme.borderRadius.md,
                                }}
                                placeholder="Mobile Number"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="relative">
                            <label
                                htmlFor="email"
                                className="absolute left-4 top-1 text-lg font-medium"
                                style={{
                                    color: theme.colors.placeHolderText,
                                }}
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                style={{
                                    width: "500px",
                                    height: "60px",
                                    backgroundColor: theme.colors.primaryLightWithOpacity,
                                    color: theme.colors.placeHolderText,
                                    borderRadius: theme.borderRadius.md,
                                }}
                                placeholder="Email Address"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <label
                            htmlFor="message"
                            className="absolute left-4 top-1 text-lg font-medium"
                            style={{
                                color: theme.colors.placeHolderText,
                            }}
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            className="px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            style={{
                                width: "1020px",
                                height: "350px",
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.placeHolderText,
                                borderRadius: theme.borderRadius.md,
                            }}
                            placeholder="Your Message"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
