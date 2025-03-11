import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import projects from "../../data/projects.json";
import { LuGithub } from "react-icons/lu";

const Projects = ({ lang }) => {
  const [isSliderReady, setIsSliderReady] = useState(false);

  useEffect(() => {
    AOS.init();
    setIsSliderReady(true); // Forçar re-renderização do Slider após o carregamento inicial
  }, []);

  const recentProjects = projects.sort((a, b) => b.id - a.id);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="my-4 lg:my-[2vw]"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div>
        {lang === "BR" ? (
          <h1 className="font-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
            projetos recentes
          </h1>
        ) : (
          <h1 className="font-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
            recents projects
          </h1>
        )}
      </div>
      <div className="my-3 lg:my-[.9vw]">
        {isSliderReady && (
          <Slider {...settings}>
            {recentProjects.map((project, id) => (
              <div key={id} className="lg:translate-x-[.4vw]">
                {lang === "BR" ? (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectItem
                      cover={project.desktopBackground}
                      title={project.projectName}
                      desc={project.projectDescBR}
                      repo={project.repository}
                      stacks={project.builtWith}
                      year={project.builtYear}
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
                      repo={project.repository}
                      stacks={project.builtWith}
                      year={project.builtYear}
                    />
                  </a>
                )}
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Projects;

const ProjectItem = ({ cover, title, desc, repo, stacks, year }) => {
  return (
    <div className="relative border border-[#1d1d1d] rounded-md p-3 lg:rounded-[.6vw] lg:p-[.6vw] lg:w-[20vw]">
      <a href={repo} target="_blank" className="z-55">
        <div className="bg-[#1d1d1d] transition-all duration-[.3s] ease-in-out scale-100  absolute flex items-center justify-center rounded-full top-4 right-4 p-3 lg:top-[1vw] lg:right-[1vw] lg:p-[.5vw] hover:scale-110">
          <LuGithub color="#f5f4f4" size={20} />
        </div>
      </a>
      <div>
        <img
          src={cover}
          alt={title}
          className="min-h-[10rem] rounded-md lg:rounded-[.4vw] lg:h-[10vw] w-[100%] object-fill"
        />
      </div>
      <div className="my-3 flex flex-col lg:my-[.5vw]">
        <h2 className="font-bold text-[#f5f4f4] text-[1rem] lg:text-[.9vw]">
          {title}
        </h2>
        <p className="text-[#a5a4a7] leading-4 text-[.9rem] lg:text-[.7vw]">
          {desc}
        </p>
        <div className="my-3 flex gap-2 text-[.8rem] lg:my-[.5vw] lg:gap-[.5vw] lg:text-[.7vw]">
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
      <span className="absolute bottom-0 right-0 font-bold text-[#a5a4a710] py-[.1rem] px-[.4rem] lg:py-[.1vw] lg:px-[.4vw] lg:text-[2.5vw] lg:bottom-[-.8vw]">
        {year}
      </span>
    </div>
  );
};
