import { vrZoneLogo, vrZoneHover, vrZoneUrl, blueBirdLogo, blueBirdHover, blueBirdUrl } from "../../../assets";
import theme from "../../../theme";
import ProjectCard from "../../../components/ProjectCard";

const OurProjects = () => {
    return (
        <section className="w-11/12 lg:w-3/4 mx-auto flex flex-col py-[120px]" id="ourProjects">
            {/* Header */}
            <div className="text-center mb-[100px]">
                <h2
                    style={{
                        fontFamily: theme.fonts.primary,
                        fontSize: theme.fontSize.heading1,
                        fontWeight: theme.fontWeight.extraBold,
                    }}
                >
                    <span style={{ color: theme.colors.textDark }}>Our </span>
                    <span style={{ color: theme.colors.primary }}>Projects</span>
                </h2>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center gap-3">
                <ProjectCard
                    logo={vrZoneLogo}
                    cardTitle="Web Site"
                    cardDescription="Lorem ipsum dolor sit amet consectetur. Pretium ac enim sapien egestas aenean dapibus. Diam nunc morbi."
                    cardTags="Ui Design, font-end/back-end development"
                />
                <ProjectCard
                    logo={blueBirdLogo}
                />
            </div>
        </section>
    );
};

export default OurProjects;
