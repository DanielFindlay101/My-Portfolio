import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

interface NavBarProps {
  openSideBar: boolean;
  setOpenSideBar: (openSideBar: boolean) => void;
}

export default function NavBar({ openSideBar, setOpenSideBar }: NavBarProps) {
  return (
    <nav
      id="/"
      className={` ${
        openSideBar ? "bg-primary/90" : "bg-primary"
      } w-full h-[50px] text-white fixed p-3 px-4 flex items-center justify-between`}
    >
      <Bars3Icon
        className="block sm:hidden w-7"
        onClick={() => setOpenSideBar(!openSideBar)}
      />
      <h1 className="hidden sm:block">Daniel.dev</h1>
      <ul className="hidden sm:flex justify-between w-[300px] cursor-pointer">
        <Link to="home" smooth={true} offset={50} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth={true} offset={50} duration={500}>
          <li>About</li>
        </Link>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
