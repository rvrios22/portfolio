interface ProjectTypes {
  title: string;
  desc: string;
  link: string;
  tech: string[];
  idx: number;
}

function Project({ title, desc, link, tech, idx }: ProjectTypes) {
  const colorAndBorder = "#7bd1ca";
  return (
    <figure key={idx} style={{ marginBottom: ".5em" }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      <p>{desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tech.map((tech, idx) => (
          <span
            key={idx}
            style={{
              border: `1px solid ${colorAndBorder}`,
              color: `${colorAndBorder}`,
              backgroundColor: "#1f5c57",
              borderRadius: "10px",
              margin: ".25em",
              padding: ".25em .5em",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </figure>
  );
}

export default Project;
