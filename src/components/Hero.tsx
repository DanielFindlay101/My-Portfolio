import Pic from "../assets/images/portfolioPic.jpg";
import Linkedin from "../assets/images/linkedin.webp";
import Github from "../assets/images/GitHub.png";
import Stack from "./Stack";

interface HeroProps {
  openSideBar: boolean;
}

export default function Hero({ openSideBar }: HeroProps) {
  return (
    <div
      className={`h-screen  ${
        openSideBar ? "bg-primary/90" : "bg-primary"
      }  h-screen flex flex-col justify-center items-center px-[50px]`}
    >
      <div
        className="flex flex-col mt-10 sm:mt-0 gap-5 md:flex-row-reverse lg:gap-10
         px-[10px] justify-center items-center"
      >
        <img
          src={Pic}
          width="350px"
          alt="profile-pic"
          className={`${
            openSideBar ? "opacity-50" : "opacity-100"
          } rounded-full`}
        />
        <div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-3xl w-full">
              Front-End React Developer
            </h1>
            <p className="text-secondary md:text-lg">
              Hi, I'm Daniel. A junior front-end React developer based in the
              Scottish Highlands.
            </p>
            <div className="w-full flex items-center">
              <h2 className="text-white">You can find me here:</h2>
              <div className="flex items-center md:gap-4">
                <a href="https://www.linkedin.com/in/daniel-findlay-b97b42149/">
                  <img src={Linkedin} alt="linkedin-img" className="w-16" />
                </a>
                <a href="https://github.com/DanielFindlay101">
                  <img
                    src={Github}
                    alt="github-img"
                    className="w-10 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* <Stack /> */}
        </div>
      </div>
    </div>
  );
}
