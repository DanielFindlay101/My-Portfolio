import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
interface NavBarProps {
  openSideBar: boolean;
  setOpenSideBar: (openSideBar: boolean) => void;
  setShowModal: (val: boolean) => void;
}

export default function NavBar({
  openSideBar,
  setOpenSideBar,
  setShowModal,
}: NavBarProps) {
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
      <h1
        onClick={() => setShowModal(true)}
        className="hidden sm:block hover:cursor-pointer"
      >
        Daniel.dev
      </h1>
      <ul className="hidden sm:flex justify-between w-[300px] cursor-pointer">
        <Link to="home" smooth={true} offset={50} duration={500}>
          <li className="hover:bg-slate/10 rounded-sm">Home</li>
        </Link>
        <Link
          className="hover:bg-slate/10 rounded-sm"
          to="about"
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>About</li>
        </Link>
        <Link
          className="hover:bg-slate/10 rounded-sm"
          to="projects"
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>Projects</li>
        </Link>
        <Link
          className="hover:bg-slate/10 rounded-sm"
          to="contact"
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
