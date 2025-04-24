import React from "react";
import TypedText from "./TypedText";

function Landing() {
  const containerStyle: React.CSSProperties = {
    marginBottom: "1em",
  };

  const headerStyle: React.CSSProperties = {
    fontSize: "3em",
    textWrap: "pretty",
  };

  const iconsStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1em",
    position: "sticky",
    top: "1em",
  };
  return (
    <div style={containerStyle}>
      <TypedText text="Rafael Rios" style={headerStyle} />
      <p style={{ fontWeight: "bolder" }}>Software Engineer</p>
      <p>
        I'm a full stack engineer with a focus on smooth and fast user
        experiences.
      </p>
      <div style={iconsStyle}>
        <a
          href="https://github.com/rvrios22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./github.svg" alt="Github" width={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-v-rios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./linkedin.svg" alt="LinkedIn" width={40} />
        </a>
        <a href="mailto:rvrios22@gmail.com">
          <img src="./email.svg" alt="Email" width={40} />
        </a>
      </div>
    </div>
  );
}

export default Landing;
