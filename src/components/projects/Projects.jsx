const Projects = ({ lang }) => {
  return (
    <div className="lg:my-[2.5vw]">
      <div>
        {lang === "BR" ? (
          <h1 className="neue-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
            .../projetos
          </h1>
        ) : (
          <h1 className="neue-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
            .../projects
          </h1>
        )}
      </div>
    </div>
  );
};

export default Projects;
