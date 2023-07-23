import type { NextPage } from "next";
import Topbar from "./components/topbar";
import About from "./views/About";
import Contact from "./views/Contact";
import Education from "./views/Education";
import HomeView from "./views/Home";
import Skills from "./views/Skills";

const V1 = () => {
  return (
    <>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Topbar />
        <div
          style={{ flex: "1 1", overflowY: "scroll", padding: "0px 300px" }}
          className="wrapper"
        >
          <HomeView />
          <Skills />
        </div>
      </div>
    </>
  );
};

export default V1;
