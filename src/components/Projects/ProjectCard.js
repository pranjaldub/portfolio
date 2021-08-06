import classes from "../Projects/Projects.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import DisplayAnimation from "../../animations/DisplayAnimation";
import ScrollAnimation from "react-animate-on-scroll";
import { Fragment } from "react";
import Plus from "../../animations/Plus.json";
const ProjectCard = (props) => {
  const techStack = props.tools.map((tool) => <span>{tool}</span>);
  const { height, width } = useWindowDimensions();
  if (width > 1000) {
    return (
      <Fragment>
        <div className={classes.whole}>
          <div className={classes.card}>
            <div className={classes.container}>
              <div className={classes.button}></div>
            </div>
            <div className={classes["content-box"]}>
              <h2>{props.projectName}</h2>

              <div className={classes.size}>
                <span>{techStack}</span>
              </div>

              <div className={classes.anchor}>
                <a href="#">View Project</a>
              </div>
            </div>
          </div>

          <div className={classes.desc_container}>
            <div className={classes.description}>
              <ScrollAnimation
                animateIn="fadeInLeft"
                animateOut="fadeInDown"
                animateOnce="false"
                duration={0.5}
                delay={0.2}
              >
                <div className={classes._heading}>
                  <div>
                    <p className={classes["_slide-up"]}>
                      <span className={classes.green}>Hello there</span>,
                    </p>
                  </div>
                  <div>
                    <p className={classes["_slide-up"]}>this is just</p>
                  </div>
                  <div>
                    <p className={classes["_slide-up"]}>a test.</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <div className={classes.media_container}>
        <div className={classes.media_card}>
          <div className={classes.media_container}>
            <div className={classes.media_button}></div>
          </div>
          <div className={classes["media_content-box"]}>
            <h2>{props.projectName}</h2>
            <div className={classes.media_size}>
              <span>{techStack}</span>
            </div>
            {/* <div className={classes.color}>
            <h3>color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div> */}
            <div className={classes.media_anchor}>
              <a href="#">View Project</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectCard;
