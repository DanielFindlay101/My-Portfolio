import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import { useState } from "react";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <Hero openSideBar={openSideBar} />
      {openSideBar && (
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      )}
    </>
  );
}

export default App;
