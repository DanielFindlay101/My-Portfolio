import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface SideBarProps {
  openSideBar: boolean;
  setOpenSideBar: (openSideBar: boolean) => void;
}

export default function SideBar({ openSideBar, setOpenSideBar }: SideBarProps) {
  return (
    <div className="h-full w-1/2 bg-slate absolute top-0 rounded-tr-3xl">
      <ChevronLeftIcon
        className="w-8 absolute top-0 right-2 pt-2"
        onClick={() => setOpenSideBar(!openSideBar)}
      />
      <ul className="pt-10 flex flex-col gap-4 px-4 text-lg">
        <li onClick={() => setOpenSideBar(!openSideBar)}>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <h1 className="absolute bottom-2 left-4">Daniel.dev</h1>
    </div>
  );
}
