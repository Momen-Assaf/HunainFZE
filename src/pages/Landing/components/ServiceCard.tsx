import theme from "../../../theme";

const ServiceCard = ({
    title = "Service Title",
    description = "Lorem ipsum dolor sit amet consectetur. Pretium ac enim sapien egestas aenean dapibus. Diam nunc morbi rutrum aliquam sit sit lacus.",
    iconSrc = "../logo.svg",
    className = "",
}) => {

    return (
        <div
            className={`relative w-full max-w-[400px] h-auto p-8 rounded-[25px] shadow-md hover:scale-105 transition-transform border border-dashed ${className}`}
            style={{
                borderColor: theme.colors.cardBorder,
                boxShadow: theme.boxShadow.serviceCard,
            }}
        >
            <img
                className="w-[60px] h-[60px] mx-auto mb-4"
                alt="Icon"
                src={iconSrc}
            />
            <h3 className="text-center font-extrabold text-2xl mb-4">
                {title}
            </h3>
            <p className="text-center font-light text-base leading-6">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
