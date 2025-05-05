import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Slider from "react-slick";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

//data
import projects from "../data/projects.json";

const DetailedProject = () => {
  const [language, setLanguage] = useState("");
  const id = useParams().id;

  const project = projects.filter((p) => p.projectSlug == id)[0];

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);

    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage("BR");
    }
  }, []);

  var settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: true,
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#111111] relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8 w-[100%] lg:rounded-[.8vw] lg:w-[45vw] lg:py-[1.5vw]">
        <Header path={"detailedProject"} setLang={setLanguage} />
        <main className="my-8 lg:my-[3.7vw]">
          <img
            src={project.projectDetails[0].headerBackground}
            alt={project.projectName}
            className="select-none pointer-events-none w-[100%] object-fill rounded-md lg:rounded-[.4vw] lg:h-[49vh]"
          />
          <div className="my-3 flex flex-col gap-4 lg:my-[1.3vw] lg:gap-[.6vw]">
            <div className="flex items-center justify-between">
              <h2
                className="font-bold text-[#f5f4f4] text-[1rem] lg:text-[2vw]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {project.projectName}
              </h2>
              <div data-aos="fade-up" data-aos-duration="1000">
                {language === "BR" ? (
                  <a
                    className="neue-med text-[#a5a4a7] text-[1rem] transition-all duration-700 ease-in-out underline underline-offset-4 lg:text-[1.1vw] hover:text-[#f5f4f4]"
                    target="_blank"
                    href={project.projectLink}
                  >
                    Acessar site
                  </a>
                ) : (
                  <a
                    className="neue-med text-[#a5a4a7] text-[1rem] transition-all duration-700 ease-in-out underline underline-offset-4 lg:text-[1.1vw] hover:text-[#f5f4f4]"
                    target="_blank"
                    href={project.projectLink}
                  >
                    Visit website
                  </a>
                )}
              </div>
            </div>
            <div
              className="mr-[1rem] lg:mr-[15vw]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {language === "BR" ? (
                <>
                  <h2 className="text-[#a5a4a7] neue-med leading-4 text-[1rem] lg:text-[1.2vw]  lg:leading-[1.2vw]">
                    {project.projectDescBR}
                  </h2>
                </>
              ) : (
                <h2 className="text-[#a5a4a7] neue-med  leading-4 text-[1rem] lg:text-[1.2vw]  lg:leading-[1.2vw]">
                  {project.projectDescEN}
                </h2>
              )}
            </div>
            <div
              className="w-full flex items-start justify-center flex-col gap-4 mr-[2rem] lg:mr-[5vw] lg:gap-[2vw] lg:mt-[.8vw]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div>
                {language === "BR" ? (
                  <>
                    <p className="text-[#a5a4a7] leading-4 text-[.8rem] lg:text-[1vw] lg:leading-[1.2vw]">
                      {project.projectDetails[0]?.descriptionBR}
                    </p>
                  </>
                ) : (
                  <p className="text-[#a5a4a7] leading-4 text-[.8rem] lg:text-[1vw] lg:leading-[1.2vw]">
                    {project.projectDetails[0]?.descriptionEN}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start justify-between lg:flex-row">
              {project.projectDetails[0]?.extrasLinks ? (
                <>
                  <div
                    className="my-[1rem] lg:my-[1.8vw] "
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <h2
                      className="font-bold text-[#f5f4f4] text-[1rem] lg:text-[1.5vw]"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      Extras
                    </h2>
                    <div className="flex flex-col">
                      {project.projectDetails[0]?.extrasLinks?.map(
                        (link, id) => (
                          <a
                            className="block text-[1rem] lg:text-[1vw] italic text-[#a5a4a7]"
                            target="_blank"
                            href={link}
                            key={id}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="500"
                          >
                            {link}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                  <div
                    className="my-[1rem] lg:my-[1.8vw] text-left lg:text-right"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    {language === "BR" ? (
                      <>
                        <h2
                          className="font-bold text-[#f5f4f4] text-[.9rem] lg:text-[1.5vw]"
                          data-aos="fade-up"
                          data-aos-duration="1500"
                        >
                          Tecnologias
                        </h2>
                        <div className="flex flex-col">
                          {project.builtWith.map((tech, id) => (
                            <span
                              key={id}
                              className="block text-[#a5a4a7] text-[.9rem] lg:text-[1vw] "
                              data-aos="fade-up"
                              data-aos-duration="1500"
                              data-aos-delay="500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <h2
                          className="font-bold text-[#f5f4f4] text-[.9rem] lg:text-[1.5vw]"
                          data-aos="fade-up"
                          data-aos-duration="1500"
                        >
                          Technologies
                        </h2>
                        <div className="flex flex-col">
                          {project.builtWith.map((tech, id) => (
                            <span
                              key={id}
                              className="block text-[#a5a4a7] text-[.9rem] lg:text-[1vw] "
                              data-aos="fade-up"
                              data-aos-duration="1500"
                              data-aos-delay="500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <div
                  className="my-[1rem] lg:my-[1.8vw] text-left"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  {language === "BR" ? (
                    <>
                      <h2
                        className="font-bold text-[#f5f4f4] text-[.9rem] lg:text-[1.5vw]"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        Tecnologias
                      </h2>
                      <div className="flex flex-col">
                        {project.builtWith.map((tech, id) => (
                          <span
                            key={id}
                            className="block text-[#a5a4a7] text-[.9rem] lg:text-[1vw] "
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h2
                        className="font-bold text-[#f5f4f4] text-[1rem] lg:text-[1.5vw]"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        Technologies
                      </h2>
                      <div className="flex flex-col">
                        {project.builtWith.map((tech, id) => (
                          <span
                            key={id}
                            className="block text-[#a5a4a7] text-[1rem] lg:text-[1vw] "
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {project.projectDetails[0]?.carouselImages ? (
            <div className="relative w-full gap-4">
              <Slider {...settings}>
                {project.projectDetails[0]?.carouselImages.map((slide, id) => (
                  <div key={id} className="lg:translate-x-[.2vw] px-2 lg:px-6">
                    <img
                      key={id}
                      src={slide}
                      className={`select-none pointer-events-none w-full h-full object-cover transition-all duration-700 ease-in-out rounded-md lg:rounded-[.8vw]`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <></>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DetailedProject;
