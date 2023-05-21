import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavBar
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
        setShowModal={setShowModal}
      />
      {showModal && <Modal setShowModal={setShowModal} />}
      <Hero openSideBar={openSideBar} />
      {openSideBar && (
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      )}
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
