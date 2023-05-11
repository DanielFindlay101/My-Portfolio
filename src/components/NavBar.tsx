import { Bars3Icon } from "@heroicons/react/24/solid";

export default function NavBar() {
  return (
    <nav className="bg-primary w-full h-[50px] text-white sticky p-2 flex items-center justify-between">
      <Bars3Icon className="block sm:hidden w-7" />
      <h1 className="hidden sm:block">Daniel.dev</h1>
      <ul className="hidden sm:flex justify-between w-[300px]">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}