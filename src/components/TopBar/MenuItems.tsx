import { arrowIcon } from "../../assets"
import CustomButton from "../CustomButton"
import ScrollableText from "../ScrollableText"

const MenuItems = ({
    className = "",
}) => {
    return (
        <div>
            {/* Navigation Links */}
            <nav className={`${className}`}>
                <ScrollableText targetSectionId="hero" text="Home" />
                <ScrollableText targetSectionId="aboutUs" text="About Us" />
                <ScrollableText targetSectionId="ourServices" text="Services" />
                <ScrollableText targetSectionId="ourProjects" text="Portfolio" />
                <CustomButton
                    text="Contact Us"
                    icon={arrowIcon}
                    buttonClass="w-[160px] h-[50px] lg:w-[174px] lg:h-[50px]"
                />
            </nav>
        </div>
    )
}

export default MenuItems