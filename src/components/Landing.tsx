import React from "react";
import TypedText from "./TypedText";

function Landing() {
  const headerStyle: React.CSSProperties = {
    fontSize: "3em",
    textWrap: "pretty",
  };

  return (
    <div
      style={{
        padding: "1em 1em 0",
      }}
    >
      <TypedText text="Rafael Rios" style={headerStyle} />
      <h2 style={{ fontWeight: "bolder" }}>Software Engineer</h2>
      <p>
        I'm a full stack engineer with a focus on smooth and fast user
        experiences.
      </p>
    </div>
  );
}

export default Landing;
