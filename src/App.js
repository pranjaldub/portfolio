import "./App.css";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Education from "./components/Education/Education";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Social from "./Social";
import classes from "./Social.module.css";
function RenderMain() {
  return (
    <Fragment>
      <Header></Header>
      <Education></Education>
      <TechStack></TechStack>
      <Projects></Projects>
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
