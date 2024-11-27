import theme from "../../../theme";
import CustomButton from "../../../components/CustomButton";
import { effect } from "../../../assets";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col items-center space-y-8 pt-[100px]">
      {/* Text and Button Section */}
      <div className="flex w-full items-center justify-between space-x-[100px]">
        {/* Left Section */}
        <div className="flex-1 text-left pl-4">
          <h1
            style={{
              fontFamily: theme.fonts.primary,
              color: theme.colors.textDark,
              fontSize: "96px",
            }}
            className="leading-tight font-medium"
          >
            <div>From Idea</div>
            <div>
              to{" "}
              <span
                style={{
                  color: theme.colors.primary,
                  fontWeight: theme.fontWeight.bold,
                }}
              >
                Delivery
              </span>
            </div>
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col">
          <p
            className="text-start pb-[35px]"
            style={{
              fontFamily: theme.fonts.primary,
              color: theme.colors.textDark,
              fontSize: "32px",
              fontWeight: theme.fontWeight.light,
            }}
          >
            Unlock the full potential of your project with Hunain FZE.
          </p>
          <CustomButton
            text="Get Started"
            icon="/assets/images/icons/arrow_right.svg"
            buttonClass="w-[200px] h-[55px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
