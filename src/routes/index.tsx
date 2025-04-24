import { createFileRoute } from "@tanstack/react-router";
import Landing from "../components/Landing";
import AboutMe from "../components/AboutMe";
import Projects from "../components/projects/Projects";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Landing />
      <AboutMe />
      <Projects />
    </>
  );
}
