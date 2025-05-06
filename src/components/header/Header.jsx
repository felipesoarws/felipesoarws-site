import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

// icons
import { IoIosArrowBack } from "react-icons/io";

// images
import euaIcon from "../../assets/images/eua_icon.png";
import braIcon from "../../assets/images/bra_icon.png";

// style
import "../../styles/fonts.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Header = ({ path, setLang }) => {
  const langBRRef = useRef();
  const langENRef = useRef();
  const [language, setLanguage] = useState("");

  useEffect(() => {
    AOS.init();
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage("BR");
    }
  }, []);

  const handleLanguage = (e) => {
    const lang = e.target.alt;

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
    <header className="fixed bg-[rgba(17,17,17,0.62)] flex flex-row justify-between backdrop-blur-[8.6px] border rounded-2xl border-solid border-[rgba(17,17,17,0.3)] z-[1000] top-0 w-[100%] py-[.8rem] px-[2rem] translate-x-[-1.7rem] lg:w-[45vw] lg:translate-x-[-1.7vw] lg:py-[1.2vw] lg:px-[2vw] ">
      <nav>
        <ul data-aos="fade-down" data-aos-duration="1900">
          <li className={`${path === "detailedProject" ? "block" : "hidden"} `}>
            <Link to={"/"}>
              {" "}
              <IoIosArrowBack
                color="#f5f4f4"
                size={30}
                strokeWidth={1.5}
                className="transition-all duration-[.3s] ease-in-out scale-1 translate-x-[-1rem] lg:translate-x-[-1vw] hover:scale-110"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div data-aos="fade-down" data-aos-duration="1900">
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

Header.propTypes = {
  setLang: PropTypes.func.isRequired,
};
