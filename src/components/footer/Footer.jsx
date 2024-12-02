// icons
import { Github, Mail, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex justify-between items-center">
      <div className="font-medium text-[#f5f4f4] text-[1rem] lg:text-[.9vw]">
        © {year} felipesoarws
      </div>
      <div className="flex items-center gap-3 lg:gap-[.8vw]">
        <a
          href="https://www.linkedin.com/in/felipesoarws/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            color="#f5f4f4"
            size={20}
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
            size={20}
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
            size={20}
            strokeWidth={1.5}
            className="transition-all duration-[.3s] ease-in-out scale-1 hover:scale-110"
          />
        </a>

        <a
          href="https://wa.me/5511978002480?text=Ol%C3%A1,%20tudo%20bem?%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp
            color="#f5f4f4"
            size={23}
            className="transition-all duration-[.3s] ease-in-out scale-1 hover:scale-110"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
