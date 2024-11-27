const ContactUs = () => {
    return (
        <div className="relative w-full max-w-screen-xl mx-auto py-16">
            <p className="text-center text-4xl font-extrabold text-transparent tracking-[0] leading-[normal]">
                <span className="text-[#363636]">Contact </span>
                <span className="text-[#1e407d]">Us!</span>
            </p>

            {/* Form container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* First Name */}
                <div className="relative w-full">
                    <label
                        htmlFor="first-name"
                        className="absolute left-6 top-2 text-2xl font-medium text-[#ffffffe6]"
                    >
                        First Name
                    </label>
                    <input
                        id="first-name"
                        type="text"
                        className="w-full h-14 px-6 py-2 bg-[#1e407dbf] text-[#ffffffe6] rounded-lg text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1e407d] focus:border-[#1e407d]"
                        placeholder="First Name"
                    />
                </div>

                {/* Last Name */}
                <div className="relative w-full">
                    <label
                        htmlFor="last-name"
                        className="absolute left-6 top-2 text-2xl font-medium text-[#ffffffe6]"
                    >
                        Last Name
                    </label>
                    <input
                        id="last-name"
                        type="text"
                        className="w-full h-14 px-6 py-2 bg-[#1e407dbf] text-[#ffffffe6] rounded-lg text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1e407d] focus:border-[#1e407d]"
                        placeholder="Last Name"
                    />
                </div>

                {/* Mobile Number */}
                <div className="relative w-full">
                    <label
                        htmlFor="mobile-number"
                        className="absolute left-6 top-2 text-2xl font-medium text-[#ffffffe6]"
                    >
                        Mob. Number
                    </label>
                    <input
                        id="mobile-number"
                        type="tel"
                        className="w-full h-14 px-6 py-2 bg-[#1e407dbf] text-[#ffffffe6] rounded-lg text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1e407d] focus:border-[#1e407d]"
                        placeholder="Mobile Number"
                    />
                </div>

                {/* Email Address */}
                <div className="relative w-full">
                    <label
                        htmlFor="email"
                        className="absolute left-6 top-2 text-2xl font-medium text-[#ffffffe6]"
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full h-14 px-6 py-2 bg-[#1e407dbf] text-[#ffffffe6] rounded-lg text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1e407d] focus:border-[#1e407d]"
                        placeholder="Email Address"
                    />
                </div>

                {/* Message */}
                <div className="relative w-full md:col-span-2">
                    <label
                        htmlFor="message"
                        className="absolute left-6 top-2 text-2xl font-medium text-[#ffffffe6]"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        className="w-full h-48 px-6 py-4 bg-[#1e407dbf] text-[#ffffffe6] rounded-lg text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1e407d] focus:border-[#1e407d]"
                        placeholder="Your Message"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
