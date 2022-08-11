import "./App.css";
import { Fragment, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Education from "./components/Education/Education";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Social from "./Social";
import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";
import classes from "./Social.module.css";
function RenderMain(props) {
  const scroll = () => {
    const element = document.getElementById("skills");
    element.scrollIntoView();
  };
  //scroll to about
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element.scrollIntoView();
  };

  //scroll to education
  const scrollToEducation = () => {
    const element = document.getElementById("education");
    element.scrollIntoView();
  };
  //scroll to prrojects
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element.scrollIntoView();
  };

  //scroll to skills
  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    element.scrollIntoView();
  };
  //to connect
  const scrollToSocial = () => {
    const element = document.getElementById("social");
    element.scrollIntoView();
  };
  const scrollobj = {
    toAbout: scrollToAbout,
    toEducation: scrollToEducation,
    toProjects: scrollToProjects,
    toSkills: scrollToSkills,
    toSocial: scrollToSocial,
  };
  return (
    <Fragment>
      <section id={"header"}>
        <Header scroll={scroll} scrollobj={scrollobj}></Header>
      </section>
      <section id={"education"}>
        <Education></Education>
      </section>
      <section id={"skills"}>
        <TechStack></TechStack>
      </section>
      <section id={"projects"}>
        <Projects></Projects>
      </section>
      <section>
        <Certifications></Certifications>
      </section>
      <section id={"about"}>
        <About></About>
      </section>
    </Fragment>
  );
}
function App() {
  const [show, setshow] = useState(true);

  const showHandler = (prevState) => {
    setshow(!prevState);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      showHandler(show);
    }, 1800);
    return () => {};
  }, []);

  if (show) {
    return (
      <div className={classes.animate}>
        <Social change={showHandler}></Social>
      </div>
    );
  } else {
    return <RenderMain></RenderMain>;
  }
}

export default App;
