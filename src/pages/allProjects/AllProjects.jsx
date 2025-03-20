import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// styles
import "../../styles/fonts.css";

// data
import projects from "../../data/projects.json";

// components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [language, setLanguage] = useState("");
  const recentProjects = projects.sort((a, b) => b.id - a.id);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage("BR");
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#111111] relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8 w-[100%] lg:border lg:border-[#1d1d1d] lg:rounded-[.8vw] lg:w-[45vw] lg:py-[1.5vw]">
        <Header path={"projects"} setLang={setLanguage} />
        <main className="my-8 lg:my-[3.7vw]">
          <div className="gap-[2rem] my-3 lg:my-[.9vw] lg:gap-[2vw] flex flex-col items-center ">
            {recentProjects.map((project, id) => (
              <div key={id} className="lg:translate-x-[.4vw]">
                {language === "BR" ? (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectItem
                      cover={project.desktopBackground}
                      title={project.projectName}
                      desc={project.projectDescBR}
                      stacks={project.builtWith}
                    />
                  </a>
                ) : (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectItem
                      cover={project.desktopBackground}
                      title={project.projectName}
                      desc={project.projectDescEN}
                      stacks={project.builtWith}
                    />
                  </a>
                )}
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

const ProjectItem = ({ cover, title, desc, stacks }) => {
  return (
    <div className="border border-[#1d1d1d]  rounded-md p-3 lg:rounded-[.6vw] lg:p-[.6vw] lg:w-[35vw] overflow-hidden transition-all duration-[.3s] ease-in-out hover:bg-[#1d1d1d18]">
      <div>
        <img
          src={cover}
          alt={title}
          className="min-h-[10rem] rounded-md lg:rounded-[.4vw] lg:h-[20vw] w-[100%] object-fill  overflow-hidden"
        />
      </div>
      <div className="my-3 flex flex-col lg:my-[.8vw] lg:gap-[.2vw]">
        <h2 className="font-bold text-[#f5f4f4] text-[1rem] lg:text-[1.3vw]">
          {title}
        </h2>
        <p className=" text-[#a5a4a7] leading-4 text-[.9rem] lg:text-[.9vw] ">
          {desc}
        </p>
        <div className=" my-3 flex gap-2 text-[.8rem] lg:my-[.5vw] lg:gap-[.5vw] lg:text-[.8vw]">
          {stacks.map((stack, id) => (
            <span
              key={id}
              className="font-bold bg-[#f5f4f4] text-[#1d1d1d] py-[.1rem] px-[.4rem] rounded-md lg:py-[.1vw] lg:px-[.4vw] lg:rounded-[.5vw]"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  cover: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  stacks: PropTypes.array.isRequired,
};
