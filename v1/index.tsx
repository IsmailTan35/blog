import type { NextPage } from "next";
import Topbar from "./components/topbar";
import Contact from "./views/Contact";
import Education from "./views/Education";
import HomeView from "./views/Home";
import Skills from "./views/Skills";
import Projects from "./views/Projects";

const V1 = () => {
  return (
    <>
      <div className="main-wrapper">
        <Topbar />
        <div className="container">
          <HomeView />
          <Skills />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default V1;
