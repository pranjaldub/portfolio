import { Fragment } from "react";
import React from "react";
import ProjectCard from "./ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";
import Bubble from "../../animations/bubble.json";
import gpt from "../../animations/gpt3_robo.json";
import react_animate from "../../animations/react.json";
import hospital from "../../animations/hospital.json";
import Lottie from "lottie-web";
import Plus from "../../animations/Plus.json";
import bounce from "../../animations/bounce.json";
import classes from "../Projects/Projects.module.css";
import DisplayAnimation from "../../animations/DisplayAnimation";
import useWindowDimensions from "../../hooks/useWindowDimensions";
const Projects = () => {
  const { height, width } = useWindowDimensions();
  if (width > 1000) {
    return (
      <Fragment>
        <div className={classes.heading}>
          <span className={classes.animate}>
            <DisplayAnimation
              animation={bounce}
              animationName={"bounce"}
            ></DisplayAnimation>
          </span>
          <div className={classes.project}>
            <h2>Projects</h2>
          </div>
        </div>

        <div className={classes.container}>
          <ProjectCard
            projectName={"HeadPose Estimation"}
            tools={["PyTorch", "Python", "OpenCV"]}
            description={""}
          ></ProjectCard>
          <div className={classes.bubble}>
            <DisplayAnimation
              animation={Bubble}
              animationName={"Bubble"}
            ></DisplayAnimation>
          </div>
          <div className={classes.gpt}>
            <DisplayAnimation
              animation={gpt}
              animationName={"gpt"}
            ></DisplayAnimation>
          </div>
          <ProjectCard
            projectName={"GPT3 Generation"}
            tools={["Angular", "Ionic", "Flask"]}
          ></ProjectCard>

          <ProjectCard
            projectName={"React Order"}
            tools={["ReactJS", "Javascript", "HTML5", "CSS3"]}
          ></ProjectCard>
          <div className={classes.react}>
            <DisplayAnimation
              animation={react_animate}
              animationName={"react_animate"}
            ></DisplayAnimation>
          </div>
          <ProjectCard
            projectName={"Hospital Management"}
            tools={["Angular", "Typescript", "ASP.NET", "C#"]}
          ></ProjectCard>
          <div className={classes.hospital}>
            <DisplayAnimation
              animation={hospital}
              animationName={"hospital"}
            ></DisplayAnimation>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className={classes.media_heading}>
          <DisplayAnimation
            animation={bounce}
            animationName={"bounce"}
          ></DisplayAnimation>
          <div className={classes.media_project}>
            <h2>Projects</h2>
          </div>
        </div>
        <div className={classes["gradient-background"]}>
          <div>
            <ProjectCard
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"GPT3 Generation"}
              tools={["Angular", "Ionic", "Flask"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"React Order"}
              tools={["ReactJS", "Javascript", "HTML5", "CSS3"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"Hospital Management"}
              tools={["Angular", "Typescript", "ASP.NET", "C#"]}
            ></ProjectCard>
          </div>
        </div>
      </Fragment>
    );
  }
};
export default Projects;
