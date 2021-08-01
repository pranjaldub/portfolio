import classes from "../Projects/Projects.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
const ProjectCard = (props) => {
  const techStack = props.tools.map((tool) => <span>{tool}</span>);
  const { height, width } = useWindowDimensions();
  if (width > 1000) {
    return (
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes["content-box"]}>
            <h2>{props.projectName}</h2>
            <div className={classes.size}>
              <span>{techStack}</span>
            </div>
            {/* <div className={classes.color}>
              <h3>color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
            <div className={classes.anchor}>
              <a href="#">View Project</a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.media_container}>
        <div className={classes.media_card}>
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
