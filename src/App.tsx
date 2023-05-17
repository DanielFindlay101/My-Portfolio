import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import { useState } from "react";
import Stack from "./components/Stack";
import About from "./components/About";

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
    </>
  );
}

export default App;
