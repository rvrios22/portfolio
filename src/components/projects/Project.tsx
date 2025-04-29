interface ProjectTypes {
  title: string;
  desc: string;
  link: string;
  tech: string[];
  idx: number;
}

function Project({ title, desc, link, tech, idx }: ProjectTypes) {
  const colorAndBorder = "#6fded5";
  return (
    <figure key={idx} style={{ marginBottom: ".5em" }}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginBottom: ".33em", cursor: 'pointer' }}
      >
        <h3 style={{ display: "inline", position: "relative" }}>
          {title}{" "}
          <img
            src="./redirect.svg"
            alt="redirect"
            width={20}
            style={{ display: "inline", position: "absolute" }}
          />
        </h3>
        <p>{desc}</p>
      </a>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tech.map((tech, idx) => (
          <span
            key={idx}
            style={{
              border: `1px solid ${colorAndBorder}`,
              color: `${colorAndBorder}`,
              backgroundColor: "#244744",
              borderRadius: "100px",
              margin: ".25em",
              padding: ".2em 1em",
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
