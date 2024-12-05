import { vrZoneLogo, vrZoneHover, vrZoneUrl, blueBirdLogo, blueBirdHover, blueBirdUrl } from "../../../assets";
import theme from "../../../theme";
import ProjectCard from "../../../components/ProjectCard";

const OurProjects = () => {
    return (
        <section className="w-full mx-auto flex flex-col py-[120px]" id="ourProjects">
            {/* Header */}
            <div className="text-center lg:mb-[219px] mb-[100px]">
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
            <div className="w-full flex flex-col items-center">
                <ProjectCard
                    logo={vrZoneLogo}
                    hoverImg={vrZoneHover}
                    url={vrZoneUrl}
                    className="z-10 w-11/12 lg:w-3/4 h-[50vw] lg:h-[33vw]"
                    cardStyle={{
                        marginBottom: "10px",
                    }}
                />
                <ProjectCard
                    logo={blueBirdLogo}
                    hoverImg={blueBirdHover}
                    url={blueBirdUrl}
                    className="z-0 w-11/12 lg:w-3/4 h-[50vw] lg:h-[33vw]"
                    cardStyle={{
                        margin: "0", // Remove any margins
                    }}
                />
            </div>
        </section>
    );
};

export default OurProjects;
