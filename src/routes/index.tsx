import { createFileRoute } from "@tanstack/react-router";
import Landing from "../components/Landing";
import AboutMe from "../components/AboutMe";
import Projects from "../components/projects/Projects";
import Icons from "../components/Icons";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth > 999) {
    return (
      <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "start", // Important!
      }}
    >
      <div style={{ position: "sticky", top: 0, alignSelf: "start" }}>
        <Landing />
        <Icons />
      </div>
      <div style={{ paddingTop: "1em" }}>
        <AboutMe />
        <Projects />
      </div>
    </div>
    
    );
  }

  return (
    <>
      <Landing />
      <Icons />
      <AboutMe />
      <Projects />
    </>
  );
}
