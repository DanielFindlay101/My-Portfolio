import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

interface SideBarProps {
  openSideBar: boolean;
  setOpenSideBar: (openSideBar: boolean) => void;
}

export default function SideBar({ openSideBar, setOpenSideBar }: SideBarProps) {
  const closeSideBar = () => {
    setOpenSideBar(false);
  };

  return (
    <div
      className={`top-0 left-0 h-full w-1/2 bg-slate fixed rounded-tr-3xl ease-in-out duration-300
                    ${openSideBar ? "translate-x-0 " : "-translate-x-full"}`}
    >
      <ChevronLeftIcon
        className="w-8 absolute top-0 right-4 pt-2"
        onClick={() => setOpenSideBar(!openSideBar)}
      />
      <ul className="pt-10 flex flex-col gap-4 px-4 text-lg cursor-pointer">
        <Link
          to="home"
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeSideBar}
          className="hover:bg-white/50 rounded-md"
        >
          <li className="pl-2">Home</li>
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeSideBar}
          className="hover:bg-white/50 rounded-md"
        >
          <li className="pl-2">About</li>
        </Link>
        <Link
          to="projects"
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeSideBar}
          className="hover:bg-white/50 rounded-md"
        >
          <li className="pl-2">Projects</li>
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeSideBar}
          className="hover:bg-white/50 rounded-md"
        >
          <li className="pl-2">Contact</li>
        </Link>
      </ul>
      <h1 className="absolute bottom-2 left-4">Daniel.dev</h1>
    </div>
  );
}
