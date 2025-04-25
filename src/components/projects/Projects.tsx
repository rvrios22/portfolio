import Project from "./Project";
import projects from "../../../public/projects.ts";
function Projects() {
  return (
    <>
      <h2 style={{ marginBottom: ".25em" }}>Projects</h2>
      {projects.map(({ title, desc, link, tech }, idx) => (
        <Project
          key={idx}
          title={title}
          desc={desc}
          link={link}
          tech={tech}
          idx={idx}
        />
      ))}
    </>
  );
}

export default Projects;
