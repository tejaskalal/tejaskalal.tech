import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "JeevDan",
      description:
        "JeevDan is a blood and organ donation platform that connects donors with recipients in emergencies. Users can register as donors, post urgent requests, and receive real-time notifications. Built with the MERN stack, JeevDan ensures a secure, responsive, and user-friendly experience to help save lives efficiently.",
      sourceCode: "https://github.com/tejaskalal/JeevDaan",
    },
    {
      title: "StoryIndex",
      description:
        "storyIndex is a movie watchlist platform that allows users to create and manage watchlists and view detailed information about movies. Movie data is fetched dynamically using APIs, giving users up-to-date information including ratings, summaries, and other details. The project is built with HTML, CSS, and JavaScript, providing a clean, interactive, and user-friendly interface.",
      sourceCode: "https://github.com/tejaskalal/StoryIndex",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using React.js to showcase my projects, skills, and experience. The website features a clean and modern design, responsive layout, and smooth navigation to provide an engaging user experience.",
      sourceCode: "https://github.com/tejaskalal/tejaskalal.tech",
    },
  ];

  const ProjectCard = ({ title, description, sourceCode }) => (
    <div
      className="card text-center shadow-lg border-0 m-3"
      style={{ width: "20rem" }}
    >
      <div className="card-body">
        <h5 className="card-title text-primary fw-bold">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        {sourceCode && (
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-2"
          >
            View Source
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="container my-5" id="projects">
      <h2 className="text-center mb-4 fw-bold">Projects</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {projectList.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
