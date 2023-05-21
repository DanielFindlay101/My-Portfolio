import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-primary w-full flex flex-col gap-10 justify-center items-center pt-10 py-10"
    >
      <h1 className="text-white text-xl">Projects</h1>
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
