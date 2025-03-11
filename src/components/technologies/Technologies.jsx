import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// data
import technologies from "../../data/technologies.json";
import otherTechnologies from "../../data/otherTechnologies.json";

// icons
import {
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiSass,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaTiktok } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";

const Technologies = ({ lang }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="lg:my-[2vw]" data-aos="fade-up" data-aos-duration="2000">
        <div>
          {lang === "BR" ? (
            <h1 className="font-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
              tecnologias
            </h1>
          ) : (
            <h1 className="font-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
              technologies
            </h1>
          )}
        </div>
        <div className="my-4 lg:my-[.8vw] flex items-center justify-start flex-wrap gap-2 lg:gap-[1.6vw]">
          {technologies.map((tech, id) => (
            <div
              className="flex items-center justify-center flex-col gap-1 lg:gap-[.5vw] transition-all duration-[.3s] ease-in-out scale-1 hover:scale-105"
              key={id}
            >
              <IconComponent iconName={tech.icon} color="#f5f4f4" size={32} />
              <span className="neue-reg text-[#a5a4a7] text-[.7rem] lg:text-[1vw] ">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:my-[2vw]" data-aos="fade-up" data-aos-duration="2500">
        <div>
          {lang === "BR" ? (
            <h1 className="font-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
              outras...
            </h1>
          ) : (
            <h1 className="font-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
              others...
            </h1>
          )}
        </div>
        <div className="my-4 lg:my-[.8vw] flex items-center justify-start flex-wrap gap-2 lg:gap-[1.2vw]">
          {otherTechnologies.map((tech, id) => (
            <div
              className="flex items-center justify-center flex-col gap-1 lg:gap-[.5vw] transition-all duration-[.3s] ease-in-out scale-100 hover:scale-105"
              key={id}
            >
              <IconComponent iconName={tech.icon} color="#f5f4f450" size={25} />
              <span
                className="neue-reg text-[#a5a4a7] text-[.7rem] lg:text-[.
              7vw] "
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Technologies;

const IconComponent = ({ iconName, color, size }) => {
  const icons = {
    html: FaHtml5,
    css: FaCss3Alt,
    react: FaReact,
    tailwind: RiTailwindCssFill,
    javascript: FaJs,
    scss: SiSass,
    meta: FaMeta,
    google: SiGoogleads,
    tiktok: FaTiktok,
    analytics: SiGoogleanalytics,
    gtm: SiGoogletagmanager,
  };

  const Icon = icons[iconName];

  if (!Icon) {
    return <p>icone não encontrado</p>;
  }

  return <Icon color={color} size={size} />;
};
