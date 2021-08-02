import { Fragment } from "react";
import DisplayAnimation from "./animations/DisplayAnimation";
import Splash from "./animations/Splash.json";
import Welcome from "./animations/Welcome.json";
import classes from "./Social.module.css";
const Social = (props) => {
  return (
    <Fragment>
      <div className={classes.collection}>
        <DisplayAnimation
          animation={Splash}
          animationName={"Splash"}
        ></DisplayAnimation>
        <DisplayAnimation
          animation={Welcome}
          animationName={"Welcome"}
        ></DisplayAnimation>
      </div>
    </Fragment>
  );
};
export default Social;
