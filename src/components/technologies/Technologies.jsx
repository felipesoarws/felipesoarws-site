// data
import technologies from "../../data/technologies.json";

// icons
import { BsFiletypeScss } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = ({ lang }) => {
  return (
    <div className="lg:my-[2.5vw]">
      <div>
        {lang === "BR" ? (
          <h1 className="neue-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
            .../tecnologias
          </h1>
        ) : (
          <h1 className="neue-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
            .../technologies
          </h1>
        )}
      </div>
      <div className="my-4 lg:my-[.8vw] flex items-center justify-start flex-wrap gap-3 lg:gap-[1.8vw]">
        {technologies.map((tech, id) => (
          <div
            className="flex items-center justify-center flex-col gap-2 lg:gap-[.5vw] transition-all duration-[.3s] ease-in-out scale-1 hover:scale-105"
            key={id}
          >
            <IconComponent iconName={tech.icon} color="#f5f4f4" size={40} />
            <span className="neue-reg text-[#a5a4a7] text-[.5rem] lg:text-[.8vw] ">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
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
    scss: BsFiletypeScss,
  };

  const Icon = icons[iconName];

  if (!Icon) {
    return <p>icone não encontrado</p>;
  }

  return <Icon color={color} size={size} />;
};
