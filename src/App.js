import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import Education from "./components/Education/Education";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <Education></Education>
      <TechStack></TechStack>
      <Projects></Projects>
    </Fragment>
  );
}

export default App;
