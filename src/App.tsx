import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import About from "./components/About";
import { useState } from "react";
import Projects from "./components/Projects";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <Hero openSideBar={openSideBar} />
      {openSideBar && (
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      )}
      <About />
      <Projects />
    </>
  );
}

export default App;
