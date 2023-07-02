interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
  technologies: string;
  link: string;
  code: string;
}

export default function ProjectCard({
  img,
  title,
  description,
  technologies,
  link,
  code,
}: ProjectCardProps) {
  return (
    <div className="grid h-[300px] w-3/4 grid-cols-1 rounded-2xl bg-slate md:grid-cols-2">
      <div className="rounded-l-l w-full">
        {/* <img src={img} alt="project-img" className="rounded-l-lg" /> */}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5 rounded-r-lg bg-myrtle">
        <h1 className="text-lg text-white">{title}</h1>
        <p className="text-center text-white">{description}</p>
        <p className="text-white">Built using: {technologies}</p>
        <div className="flex items-center justify-evenly gap-2">
          <a href={link}>
            <button className="rounded-md bg-red p-2">Go to site</button>
          </a>
          <a href={code}>
            <button className="rounded-md bg-red p-2 outline-4">
              View code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
