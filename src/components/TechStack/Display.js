import classes from "../TechStack/Display.module.css";
const Display = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default Display;
