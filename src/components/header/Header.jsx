import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import euaIcon from "../../assets/images/eua_icon.png";
import braIcon from "../../assets/images/bra_icon.png";
import "../../styles/fonts.css";

const Header = ({ path, setLang }) => {
  const langBRRef = useRef();
  const langENRef = useRef();
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
    const lang = e.target.alt;
    console.log(langBRRef);

    if (lang === "BR") {
      setLanguage("BR");
      setLang("BR");
      localStorage.setItem("language", "BR");
      langBRRef.current.style.opacity = "0";
      langBRRef.current.style.display = "none";
      langENRef.current.style.opacity = "1";
      langENRef.current.style.display = "block";
    } else {
      setLanguage("EN");
      setLang("EN");
      localStorage.setItem("language", "EN");
      langENRef.current.style.opacity = "0";
      langENRef.current.style.display = "none";
      langBRRef.current.style.opacity = "1";
      langBRRef.current.style.display = "block";
    }
  };

  return (
    <header className="fixed bg-[rgba(17,17,17,0.62)] flex justify-between backdrop-blur-[8.6px] border rounded-2xl border-solid border-[rgba(17,17,17,0.3)] z-[1000] top-0 w-[100%] py-[1.2rem] px-[2rem] translate-x-[-1.7rem] lg:w-[45vw] lg:translate-x-[-1.7vw] lg:py-[1.2vw] lg:px-[2vw] ">
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
        <img
          src={euaIcon}
          className={`${
            language === "EN" ? "hidden" : ""
          } cursor-pointer neue-reg text-[#f5f4f4] block transition-all duration-[.3s] ease-in-out w-[1.5rem] lg:w-[1.6vw]`}
          onClick={(e) => handleLanguage(e)}
          ref={langENRef}
          alt="EN"
        />

        <img
          src={braIcon}
          className={`${
            language === "BR" ? "hidden" : ""
          } cursor-pointer neue-reg text-[#f5f4f4] block transition-all duration-[.3s] ease-in-out w-[1.5rem] lg:w-[1.6vw]`}
          onClick={(e) => handleLanguage(e)}
          ref={langBRRef}
          alt="BR"
        />
      </div>
    </header>
  );
};

export default Header;
