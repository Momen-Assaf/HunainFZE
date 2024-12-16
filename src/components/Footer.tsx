import { logo } from "../assets"
import ScrollableText from "./ScrollableText"

const Footer = () => {
    return (
        <section className="w-full">
            <div className="w-11/12 lg:w-3/4 flex flex-row mx-auto  ">
                {/* Top section */}
                <div className="flex">
                    {/* Logo Section */}
                    <div className="items-start">
                        <img
                            className="h-12 lg:h-14 object-cover"
                            alt="Logo"
                            src={logo}
                        />
                        <div className="items-end">
                            <ScrollableText text="Privacy Policy"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer