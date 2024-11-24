import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../../styles/fonts.css";

const Header = ({ path, setLang }) => {
  const langBR = useRef();
  const langEN = useRef();
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage("BR");
    }
  }, []);

  const handleLanguage = (e) => {
    const lang = e.target.innerText;

    if (lang === "BR") {
      setLanguage("BR");
      setLang("BR");
      localStorage.setItem("language", "BR");
      langBR.current.style.opacity = "0";
      langBR.current.style.display = "none";
      langEN.current.style.opacity = "1";
      langEN.current.style.display = "block";
    } else {
      setLanguage("EN");
      setLang("EN");
      localStorage.setItem("language", "EN");
      langEN.current.style.opacity = "0";
      langEN.current.style.display = "none";
      langBR.current.style.opacity = "1";
      langBR.current.style.display = "block";
    }
  };

  return (
    <header className="flex justify-between">
      <nav>
        <ul className="flex gap-6 lg:gap-[2.5vw]">
          <li
            className={`${
              path === "home" ? "neue-bold" : "neue-reg"
            } text-[#f5f4f4] lg:text-[1.2vw] transition-all duration-[.3s] ease-in-out hover:text-[#7e7e7e]`}
          >
            {language === "BR" ? (
              <Link to={"/"}>ínicio</Link>
            ) : (
              <Link to={"/"}>home</Link>
            )}
          </li>
          <li
            className={`${
              path === "projects" ? "neue-bold" : "neue-reg"
            } text-[#f5f4f4] lg:text-[1.2vw] transition-all duration-[.3s] ease-in-out hover:text-[#7e7e7e]`}
          >
            {language === "BR" ? (
              <Link to={"/projects"}>projetos</Link>
            ) : (
              <Link to={"/projects"}>projects</Link>
            )}
          </li>
          <li
            className={`${
              path === "contact" ? "neue-bold" : "neue-reg"
            } text-[#f5f4f4] lg:text-[1.2vw] transition-all duration-[.3s] ease-in-out hover:text-[#7e7e7e]`}
          >
            {language === "BR" ? (
              <Link to={"/contact"}>contato</Link>
            ) : (
              <Link to={"/contact"}>contact</Link>
            )}
          </li>
        </ul>
      </nav>
      <div>
        <span
          className={`${
            language === "EN" ? "hidden" : ""
          } cursor-pointer neue-reg text-[#f5f4f4] transition-all duration-[.3s] ease-in-out lg:text-[1.2vw]  hover:text-[#7e7e7e]`}
          onClick={(e) => handleLanguage(e)}
          ref={langEN}
        >
          EN
        </span>
        <span
          className={`${
            language === "BR" ? "hidden" : ""
          } cursor-pointer neue-reg text-[#f5f4f4] transition-all duration-[.3s] ease-in-out lg:text-[1.2vw] hover:text-[#7e7e7e]`}
          onClick={(e) => handleLanguage(e)}
          ref={langBR}
        >
          BR
        </span>
      </div>
    </header>
  );
};

export default Header;
