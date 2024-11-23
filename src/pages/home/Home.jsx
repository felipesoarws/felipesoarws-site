import { useEffect, useState } from "react";
import "../../styles/fonts.css";

// images
import Me from "../../assets/profile.jpg";

// components
import Header from "../../components/header/Header";

// icons
import { Github, FileDown } from "lucide-react";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";

const Home = () => {
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    // age
    const actualAge = new Date().getFullYear() - 2002;
    setAge(actualAge);

    // lang
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage("BR");
    }
  }, []);

  console.log(language);

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 w-[100%] lg:w-[45vw] lg:py-[1.5vw]">
        <Header path={"home"} setLang={setLanguage} />
        <main className="my-8 lg:my-[3vw]">
          <div className="flex items-start gap-5 lg:gap-[2vw]">
            <img
              src={Me}
              className="rounded-full w-[4rem] lg:w-[8.5vw]"
              alt="me profile"
            />
            <div className="lg:w-[28vw]">
              {language === "BR" ? (
                <h1 className="neue-bold text-[#f5f4f4] text-[1.2rem] lg:leading-[2.6vw] lg:text-[2.1vw]">
                  Olá, sou Felipe, &#128075;
                </h1>
              ) : (
                <h1 className="neue-bold text-[#f5f4f4] text-[1.2rem] lg:leading-[2.6vw] lg:text-[2.1vw]">
                  Hi, I'm Felipe, &#128075;
                </h1>
              )}

              {language === "BR" ? (
                <p className="neue-reg text-[#a5a4a7] text-[.9rem] lg:text-[1.1vw]">
                  um desenvolvedor frontend de {age} anos, comprometido com a
                  criação de interfaces de usuário inovadoras e eficientes.
                </p>
              ) : (
                <p className="neue-reg text-[#a5a4a7] text-[.9rem] lg:text-[1.1vw]">
                  a {age}-year-old frontend developer commited to creating
                  innovative and efficient user inferfaces.
                </p>
              )}

              {language === "BR" ? (
                <p className="neue-reg text-[#f5f4f4] text-[.8rem] lg:text-[1vw] lg:mt-[.4vw]">
                  São Paulo - Brasil
                </p>
              ) : (
                <p className="neue-reg text-[#f5f4f4] text-[.8rem] lg:text-[1vw] lg:mt-[.4vw]">
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
              >
                <Mail
                  color="#f5f4f4"
                  size={23}
                  strokeWidth={1.5}
                  className="transition-all duration-[.3s] ease-in-out scale-1 hover:scale-110"
                />
              </a>
            </div>

            <a
              href={`./pdf/curriculo.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer flex items-center transition-all duration-[.3s] ease-in-out scale-1  border border-[#f5f4f4] gap-2 py-1.5 px-4 rounded-[.5rem] lg:py-[.4vw] lg:px-[.8vw] lg:rounded-[.5vw] lg:gap-[.5vw] hover:bg-[#1d1d1d]">
                {language === "BR" ? (
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
        </main>
      </div>
    </div>
  );
};

export default Home;
