import theme from "../../../theme";
import CustomButton from "../../../components/CustomButton";
import { arrowIcon } from "../../../assets";

const HeroSection = () => {
  return (
    <section
      className="w-11/12 lg:w-3/4 mx-auto flex flex-col items-center space-y-8 pt-16 lg:pt-[100px] mb-[50px]"
      id="hero"
    >
      {/* Text and Button Section */}
      <div className="flex flex-col lg:flex-row w-full items-center justify-between lg:space-x-[100px]">
        {/* Left Section */}
        <div className="flex-1 lg:text-start text-center lg:pl-4">
          <h1
            style={{
              fontFamily: theme.fonts.primary,
              color: theme.colors.textDark,
              fontSize: theme.fontSize.xLarge,
              fontWeight: theme.fontWeight.medium,
            }}
            className="leading-tight"
          >
            <div>From Idea</div>
            <div>
              to{" "}
              <span
                style={{
                  color: theme.colors.primary,
                  fontWeight: theme.fontWeight.black,
                }}
              >
                Delivery
              </span>
            </div>
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start p-4">
          <p
            className="lg:text-start pb-5 pt-5 text-center pl-4"
            style={{
              fontFamily: theme.fonts.primary,
              color: theme.colors.textDark,
              fontSize: theme.fontSize.heading2,
              fontWeight: theme.fontWeight.light,
            }}
          >
            Unlock the full potential of your project with Hunain FZE.
          </p>
          <CustomButton
            text="Get Started"
            icon={arrowIcon}
            buttonClass="w-[200px] h-[55px] mt-3"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
