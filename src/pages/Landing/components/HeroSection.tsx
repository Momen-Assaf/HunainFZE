import theme from "../../../theme";
import CustomButton from "../../../components/CustomButton";
const HeroSection = () => {
  return (
    // className="  flex items-center"
    <section className="container mx-auto flex items-center justify-center space-x-[100px]">
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
          From Idea to{" "}
          <span
            style={{
              color: theme.colors.primary,
              fontWeight: theme.fontWeight.bold,
            }}
            >
            Delivery
          </span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        <p
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
          buttonClass="w-[174px] h-[55px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
