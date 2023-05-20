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
    <div className="h-full w-1/2 bg-slate fixed top-0 rounded-tr-3xl">
      <ChevronLeftIcon
        className="w-8 absolute top-0 right-2 pt-2"
        onClick={() => setOpenSideBar(!openSideBar)}
      />
      <ul className="pt-10 flex flex-col gap-4 px-4 text-lg">
        <Link
          to="home"
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeSideBar}
        >
          <li>Home</li>
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeSideBar}
        >
          <li>About</li>
        </Link>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <h1 className="absolute bottom-2 left-4">Daniel.dev</h1>
    </div>
  );
}
