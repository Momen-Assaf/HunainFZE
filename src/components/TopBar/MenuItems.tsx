import { arrowIcon } from "../../assets"
import theme from "../../theme"
import CustomButton from "../CustomButton"
import ScrollableText from "../ScrollableText"

const MenuItems = ({
    className = "",
}) => {
    return (
        <div>
            {/* Navigation Links */}
            <nav className={`${className}`}>
                <ScrollableText targetSectionId="hero" text="Home" size={theme.fontSize.paragraph} />
                <ScrollableText targetSectionId="aboutUs" text="About Us" size={theme.fontSize.paragraph} />
                <ScrollableText targetSectionId="ourServices" text="Services" size={theme.fontSize.paragraph} />
                <ScrollableText targetSectionId="ourProjects" text="Portfolio" size={theme.fontSize.paragraph} />
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