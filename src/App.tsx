import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { useState } from "react";
import SideBar from "./components/Sidebar";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <Hero openSideBar={openSideBar} />
      {openSideBar && <SideBar />}
    </>
  );
}

export default App;
