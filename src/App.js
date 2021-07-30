import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import Education from "./components/Education/Education";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Education></Education>
      <TechStack></TechStack>
    </Fragment>
  );
}

export default App;
