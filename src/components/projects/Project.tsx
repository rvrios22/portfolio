interface ProjectTypes {
  title: string;
  desc: string;
  link: string;
  tech: string[];
  key: number;
}

function Project({ title, desc, link, tech, key }: ProjectTypes) {
  return (
    <figure key={key}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      <p>{desc}</p>
      {tech.map((tech, idx) => (
        <span key={idx}>{tech}</span>
      ))}
    </figure>
  );
}

export default Project;
