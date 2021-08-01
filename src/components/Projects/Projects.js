import { Fragment } from "react";
import React from "react";
import ProjectCard from "./ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";
import Lottie from "lottie-web";
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
          <DisplayAnimation
            animation={bounce}
            animationName={"bounce"}
          ></DisplayAnimation>
          <div className={classes.project}>
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
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>
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
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>

            <ProjectCard
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
            ></ProjectCard>
          </div>
        </div>
      </Fragment>
    );
  }
};
export default Projects;
