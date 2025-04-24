import Project from "./Project";
import projects from "../../../public/projects.ts";
function Projects() {
  return (
    <>
      <h2>Projects</h2>
      {projects.map(({ title, desc, link, tech }, idx) => (
        <Project title={title} desc={desc} link={link} tech={tech} key={idx} />
      ))}
    </>
  );
}

export default Projects;
