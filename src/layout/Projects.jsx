import React from "react";
import { projects } from "../lib/projectData";
import ProjectCard from "./projects/ProjectCard";
import ProjectTitleAnimate from "./projects/ProjectTitleAnimate";

const Projects = () => {
  return (
    <div>
      <section
        id="projects"
        className="mx-auto  flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] z-[20] mt-24"
      >
        <ProjectTitleAnimate />
        <div className="mb-24 grid w-[90%] grid-cols-1 grid-rows-2 gap-x-6 gap-y-6 lg:max-w-[1200px] lg:grid-cols-1">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              repo={project.repo}
              projectLink={project.linkProject}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
