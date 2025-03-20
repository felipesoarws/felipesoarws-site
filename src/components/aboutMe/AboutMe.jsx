import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// images
import Me from "../../assets/images/profile.jpg";

// icons
import { Github, Mail, Linkedin, FileDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const AboutMe = ({ lang }) => {
  const [age, setAge] = useState("");

  useEffect(() => {
    const actualAge = new Date().getFullYear() - 2002;
    setAge(actualAge);
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex items-start gap-5 lg:gap-[2vw]">
        <img
          src={Me}
          className="rounded-full w-[4rem] lg:w-[8.5vw]"
          alt="me profile"
          data-aos="fade-up"
          data-aos-duration="2000"
        />
        <div className="lg:w-[28vw]">
          {lang === "BR" ? (
            <h1
              className="neue-bold text-[#f5f4f4] text-[1.2rem] lg:leading-[2.6vw] lg:text-[2.1vw]"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              Olá, sou Felipe, &#128075;
            </h1>
          ) : (
            <h1
              className="neue-bold text-[#f5f4f4] text-[1.2rem] lg:leading-[2.6vw] lg:text-[2.1vw]"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              Hi, I&apos;m Felipe, &#128075;
            </h1>
          )}

          {lang === "BR" ? (
            <p
              className="neue-reg text-[#a5a4a7] text-[.9rem] lg:text-[1.1vw]"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              um desenvolvedor frontend de {age} anos, criador de interfaces de
              usuário inovadoras e eficientes.
            </p>
          ) : (
            <p
              className="neue-reg text-[#a5a4a7] text-[.9rem] lg:text-[1.1vw]"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              a {age}-year-old frontend developer creator of innovative and
              efficient user interfaces.
            </p>
          )}

          {lang === "BR" ? (
            <p
              className="neue-reg text-[#f5f4f4] text-[.8rem] lg:text-[1vw] lg:mt-[.4vw]"
              data-aos="fade-up"
              data-aos-duration="2200"
            >
              São Paulo - Brasil
            </p>
          ) : (
            <p
              className="neue-reg text-[#f5f4f4] text-[.8rem] lg:text-[1vw] lg:mt-[.4vw]"
              data-aos="fade-up"
              data-aos-duration="2200"
            >
              São Paulo - Brazil
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between gap-8 my-6 lg:gap-[2vw] lg:my-[1.2vw] lg:ml-[.5vw] lg:justify-start">
        <div className="flex items-center gap-3 lg:gap-[.8vw]">
          <a
            href="https://www.linkedin.com/in/felipesoarws/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Linkedin
              color="#f5f4f4"
              size={23}
              strokeWidth={1.5}
              className="transition-all duration-[.3s] ease-in-out scale-1 hover:scale-110"
            />
          </a>
          <a
            href="https://github.com/felipesoarws/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <Github
              color="#f5f4f4"
              size={23}
              strokeWidth={1.5}
              className="transition-all duration-[.3s] ease-in-out scale-1 hover:scale-110"
            />
          </a>
          <a
            href="mailto:felipesoarwz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            <Mail
              color="#f5f4f4"
              size={23}
              strokeWidth={1.5}
              className="transition-all duration-[.3s] ease-in-out scale-1 hover:scale-110"
            />
          </a>
          <a
            href="https://wa.me/5511978002480?text=Ol%C3%A1,%20tudo%20bem?%20"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <FaWhatsapp
              color="#f5f4f4"
              size={23}
              className="transition-all duration-[.3s] ease-in-out scale-1 hover:scale-110"
            />
          </a>
        </div>

        <a
          href={`./pdf/curriculo.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-duration="2300"
        >
          <button className="cursor-pointer flex items-center transition-all duration-[.3s] ease-in-out scale-1  border border-[#f5f4f4] gap-2 py-1.5 px-4 rounded-[.5rem] lg:py-[.4vw] lg:px-[.8vw] lg:rounded-[.5vw] lg:gap-[.5vw] hover:bg-[#1d1d1d]">
            {lang === "BR" ? (
              <span className="neue-med text-[#f5f4f4] lg:text-[1vw]">
                Currículo
              </span>
            ) : (
              <span className="neue-med text-[#f5f4f4] lg:text-[1vw]">
                Resume
              </span>
            )}

            <FileDown color="#f5f4f4" size={20} strokeWidth={1.5} />
          </button>
        </a>
      </div>
    </>
  );
};

export default AboutMe;

AboutMe.propTypes = {
  lang: PropTypes.string.isRequired,
};
