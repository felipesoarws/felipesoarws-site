import { useEffect, useState } from "react";
import "../../styles/fonts.css";

// components
import Header from "../../components/header/Header";

const AllProjects = () => {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage("BR");
    }
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-[#111111]  overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8 w-[100%] lg:border lg:border-[#1d1d1d] lg:rounded-[.8vw] lg:w-[45vw] lg:py-[1.5vw]">
        <Header path={"projects"} setLang={setLanguage} />
        <main className="my-8 lg:my-[3vw]"></main>
      </div>
    </div>
  );
};

export default AllProjects;
