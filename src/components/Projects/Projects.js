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
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
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
            {/* <h2>Projects</h2> */}
            <div className={classes.content}>
              <div className={classes.content__container}>
                <p className={classes.content__container__text}>My</p>

                <ul className={classes.content__container__list}>
                  <li className={classes.content__container__list__item}>
                    Projects
                  </li>
                  <li className={classes.content__container__list__item}>
                    Work
                  </li>
                  <li className={classes.content__container__list__item}>
                    daily grind :)
                  </li>
                  <li className={classes.content__container__list__item}>
                    developments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.container}>
          <ProjectCard
            projectName={"HeadPose Estimation"}
            tools={["PyTorch", "Python", "OpenCV"]}
            description_blue={"Headpose Estimation"}
            description_black={"on Masked Faces"}
            description_black2={"built with PyTorch."}
            github={"https://github.com/pranjaldub/Joint-Head-Pose-Estimation"}
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
            tools={["Angular", "Ionic", "Flask", "FastAPI"]}
            description_blue={"Automated"}
            description_black={"Email generation"}
            description_black2={"Powered by GPT3"}
            github={
              "https://github.com/pranjaldub/GPT-Email-Generator-using-FastAPI"
            }
          ></ProjectCard>

          <ProjectCard
            projectName={"React Order"}
            tools={["ReactJS", "Javascript", "HTML5", "CSS3"]}
            description_blue={"Food Order App"}
            description_black={"with React"}
            description_black2={"Javascript and Firebase"}
            github={"https://github.com/pranjaldub/ReactMeals"}
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
            description_blue={"Full Stack"}
            description_black={"project with Angular"}
            description_black2={"C# and SQL server"}
            github={"https://github.com/pranjaldub/Curewell-Capstone"}
          ></ProjectCard>
          <div className={classes.hospital}>
            <DisplayAnimation
              animation={hospital}
              animationName={"hospital"}
            ></DisplayAnimation>
          </div>
        </div>
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="flipOutX"
          animateOnce="false"
          duration={0.5}
          delay={0}
        >
          <div className={classes.__heading}>
            <div className={classes.view_more}>
              <div className={classes.more_text}>
                <p>
                  <span className={classes._blue}>There's more ! </span>
                  <p>this was just an intro</p>
                </p>
              </div>
              <div className={classes.view_more_button}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="gooey">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="5"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        type="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="highContrastGraphic"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="highContrastGraphic"
                        operator="atop"
                      />
                    </filter>
                  </defs>
                </svg>

                <button
                  id={classes["gooey-button"]}
                  onClick={() => {
                    window.location.href = "https://github.com/pranjaldub";
                  }}
                >
                  <span className={classes.button_label}>View More</span>
                  <span className={classes.bubbles}>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
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
            <div className={classes.content}>
              <div className={classes.content__container}>
                <p className={classes.content__container__text}>My</p>

                <ul className={classes.content__container__list}>
                  <li className={classes.content__container__list__item}>
                    Projects
                  </li>
                  <li className={classes.content__container__list__item}>
                    Work
                  </li>
                  <li className={classes.content__container__list__item}>
                    daily grind :)
                  </li>
                  <li className={classes.content__container__list__item}>
                    developments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["gradient-background"]}>
          <div>
            <div className={classes.media_bubble}>
              <DisplayAnimation
                animation={Bubble}
                animationName={"Bubble"}
              ></DisplayAnimation>
            </div>
            <ProjectCard
              projectName={"HeadPose Estimation"}
              tools={["PyTorch", "Python", "OpenCV"]}
              description_blue={"Headpose Estimation"}
              description_black={"on Masked Faces"}
              description_black2={"built with PyTorch."}
              github={
                "https://github.com/pranjaldub/Joint-Head-Pose-Estimation"
              }
            ></ProjectCard>

            <div className={classes.media_gpt}>
              <DisplayAnimation
                animation={gpt}
                animationName={"gpt"}
              ></DisplayAnimation>
            </div>
            <ProjectCard
              projectName={"GPT3 Generation"}
              tools={["Angular", "Ionic", "Flask", "FastAPI"]}
              description_blue={"Automated"}
              description_black={"Email generation"}
              description_black2={"Powered by GPT3"}
              github={
                "https://github.com/pranjaldub/GPT-Email-Generator-using-FastAPI"
              }
            ></ProjectCard>

            <ProjectCard
              projectName={"React Order"}
              tools={["ReactJS", "Javascript", "HTML5", "CSS3"]}
              description_blue={"Food Order App"}
              description_black={"with React"}
              description_black2={"Javascript and Firebase"}
              github={"https://github.com/pranjaldub/ReactMeals"}
            ></ProjectCard>
            <div className={classes.media_react}>
              <DisplayAnimation
                animation={react_animate}
                animationName={"react_animate"}
              ></DisplayAnimation>
            </div>

            <ProjectCard
              projectName={"Hospital Management"}
              tools={["Angular", "Typescript", "ASP.NET", "C#"]}
              description_blue={"Full Stack"}
              description_black={"project with Angular"}
              description_black2={"C# and SQL server"}
              github={"https://github.com/pranjaldub/Curewell-Capstone"}
            ></ProjectCard>

            <div className={classes.media_hospital}>
              <DisplayAnimation
                animation={hospital}
                animationName={"hospital"}
              ></DisplayAnimation>
            </div>
          </div>
        </div>
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="flipOutX"
          animateOnce="false"
          duration={0.5}
          delay={0}
        >
          <div className={classes.__heading}>
            <div className={classes.view_more}>
              <div className={classes.more_text}>
                <p>
                  <span className={classes._blue}>There's more ! </span>
                  <p>this was just an intro</p>
                </p>
              </div>
              <div className={classes.view_more_button}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="gooey">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="5"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        type="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="highContrastGraphic"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="highContrastGraphic"
                        operator="atop"
                      />
                    </filter>
                  </defs>
                </svg>

                <button
                  id={classes["gooey-button"]}
                  onClick={() => {
                    window.location.href = "https://github.com/pranjaldub";
                  }}
                >
                  <span className={classes.button_label}>View More</span>
                  <span className={classes.bubbles}>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                    <span className={classes.bubble}></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </Fragment>
    );
  }
};
export default Projects;
