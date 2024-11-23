import { useEffect, useState } from "react";
import "../../styles/fonts.css";

// images

// components
import Header from "../../components/header/Header";

// icons

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
        <Header path={"projects"} setLang={setLanguage} />
        <main className="my-8 lg:my-[3vw]"></main>
      </div>
    </div>
  );
};

export default Home;
