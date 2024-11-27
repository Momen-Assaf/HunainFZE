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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* First Name */}
                    <div className="relative w-full">
                        <label
                            htmlFor="first-name"
                            className="absolute left-6 top-2 text-2xl font-medium"
                            style={{
                                color: theme.colors.textLight,
                            }}
                        >
                            First Name
                        </label>
                        <input
                            id="first-name"
                            type="text"
                            className="w-full h-14 px-6 py-2 rounded-lg text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1e407d] focus:border-[#1e407d]"
                            style={{
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.textLight,
                            }}
                            placeholder="First Name"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="relative w-full">
                        <label
                            htmlFor="last-name"
                            className="absolute left-6 top-2 text-2xl font-medium"
                            style={{
                                color: theme.colors.textLight,
                            }}
                        >
                            Last Name
                        </label>
                        <input
                            id="last-name"
                            type="text"
                            className="w-full h-14 px-6 py-2 rounded-lg text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1e407d] focus:border-[#1e407d]"
                            style={{
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.textLight,
                            }}
                            placeholder="Last Name"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div className="relative w-full">
                        <label
                            htmlFor="mobile-number"
                            className="absolute left-6 top-2 text-2xl font-medium"
                            style={{
                                color: theme.colors.textLight,
                            }}
                        >
                            Mob. Number
                        </label>
                        <input
                            id="mobile-number"
                            type="tel"
                            className="w-full h-14 px-6 py-2 rounded-lg text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1e407d] focus:border-[#1e407d]"
                            style={{
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.textLight,
                            }}
                            placeholder="Mobile Number"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="relative w-full">
                        <label
                            htmlFor="email"
                            className="absolute left-6 top-2 text-2xl font-medium"
                            style={{
                                color: theme.colors.textLight,
                            }}
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full h-14 px-6 py-2 rounded-lg text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1e407d] focus:border-[#1e407d]"
                            style={{
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.textLight,
                            }}
                            placeholder="Email Address"
                        />
                    </div>

                    {/* Message */}
                    <div className="relative w-full md:col-span-2">
                        <label
                            htmlFor="message"
                            className="absolute left-6 top-2 text-2xl font-medium"
                            style={{
                                color: theme.colors.textLight,
                            }}
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full h-48 px-6 py-4 rounded-lg text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1e407d] focus:border-[#1e407d]"
                            style={{
                                backgroundColor: theme.colors.primaryLightWithOpacity,
                                color: theme.colors.textLight,
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
