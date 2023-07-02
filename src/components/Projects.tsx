import ProjectCard from "./ProjectCard";
import Pokedex from "../assets/images/Pokedex.jpg";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex w-full flex-col items-center justify-center gap-10 bg-primary py-10 pt-10"
    >
      <h1 className="text-xl text-white">Projects</h1>
      <ProjectCard
        img={Pokedex}
        title="Pokedex"
        description="Select a Pokemon and build your collection of favourties"
        technologies="React Typescript TailwindCSS"
        link="https://pokedex-sable-sigma.vercel.app/"
        code="https://github.com/DanielFindlay101/Pokedex/tree/main/my-pokedex"
      />
      <ProjectCard
        img={Pokedex}
        title="Pokedex"
        description="Select a Pokemon and build your collection of favourties"
        technologies="React Typescript TailwindCSS"
        link="https://pokedex-sable-sigma.vercel.app/"
        code="https://github.com/DanielFindlay101/Pokedex/tree/main/my-pokedex"
      />
    </div>
  );
}
