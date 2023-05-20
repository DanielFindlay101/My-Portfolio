import Notebook from "../assets/images/notebook.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="w-full bg-myrtle px-12 p-4 text-white flex flex-col items-center gap-2
                    md:flex-row md:justify-center md:gap-20"
    >
      <div
        className="p-2 grid grid-cols-1 justify-items-center gap-2
                         md:grid-cols-2 md:w-3/4
                         xl:w-1/2         "
      >
        <img
          src={Notebook}
          className="rounded-3xl w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
        />
        <div className="w-full gap-4 flex flex-col p-4">
          <h1 className="md:text-lg">ABOUT ME</h1>
          <p className="text-sm text-slate font-semibold xl:text-base">
            A self-taught junior developer with 1 year's commercial experience
            using technologies such as React, Typescript, Tailwind and SCSS. I
            have a passion for designing responsive websites and user interfaces
            all while maintaining clean and efficient code. I thrive as both
            part of a team and as an individual.
          </p>
          <p className="text-sm text-slate font-semibold xl:text-base">
            When I'm not programming, you can find me on stage playing in local
            gigs or exploring the beautiful countryside.
          </p>
        </div>
      </div>
    </div>
  );
}
