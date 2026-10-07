import Background from "./components/background";
import Marquee from "./components/marquee";
import Topbar from "./components/topbar";
import Contact from "./views/Contact";
import HomeView from "./views/Home";
import Projects from "./views/Projects";
import Skills from "./views/Skills";

const V1 = () => {
  return (
    <div className="main-wrapper">
      <Background />
      <Topbar />
      <main>
        <HomeView />
        <Marquee />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default V1;
