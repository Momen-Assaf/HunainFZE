const ServiceCard = ({
    title = "Service Title",
    description = "Lorem ipsum dolor sit amet consectetur. Pretium ac enim sapien egestas aenean dapibus. Diam nunc morbi rutrum aliquam sit sit lacus.",
    imageSrc = "../logo.svg",
    borderColor = "#9747ff",
    shadowColor = "#151925",
}) => {
    return (
        <div className="relative w-[440px] h-[860px]">
            <div
                className={`fixed w-full h-full top-0 left-0 rounded-[5px] overflow-hidden border border-dashed`}
                style={{ borderColor }}
            >
                <div
                    className="absolute w-[402px] h-[402px] top-[19px] left-[19px] border border-solid shadow-lg bg-[#323846] rounded-[25px]"
                    style={{ boxShadow: `4px 4px 1px ${shadowColor}` }}
                >
                    <div className="relative w-full h-[282px] top-[59px]">
                        <img
                            className="absolute w-[60px] h-[38px] top-0 left-1/2 transform -translate-x-1/2"
                            alt="Icon"
                            src={imageSrc}
                        />

                        <h3 className="absolute w-full top-12 text-center font-extrabold text-white text-[32px] tracking-[0]">
                            {title}
                        </h3>

                        <p className="absolute w-[350px] top-[117px] left-1/2 transform -translate-x-1/2 text-center font-light text-white text-2xl leading-normal">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
