import "./App.css";
import { Fragment, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Education from "./components/Education/Education";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Social from "./Social";
import classes from "./Social.module.css";
function RenderMain(props) {
  const scroll = () => {
    const element = document.getElementById("skills");
    element.scrollIntoView();
  };
  return (
    <Fragment>
      <section id={"header"}>
        <Header scroll={scroll}></Header>
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
