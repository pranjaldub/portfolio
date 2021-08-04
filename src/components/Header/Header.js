import { Fragment } from "react";
import { Animated } from "react-animated-css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import DisplayAnimation from "../../animations/DisplayAnimation";
import Avatar from "../../animations/Avatar.json";
import AvatarBackground from "../../animations/AvatarBackground.json";
import HeaderBackground from "../../animations/HeaderBackground.json";
//import "animate.css/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Header.module.css";
const Header = () => {
  const otherClasses = `${classes.headerElements} `;
  const { height, width } = useWindowDimensions();
  if (width < 1000) {
    return (
      <Fragment>
        <div>
          <div className={classes.media_HeaderBackground}>
            <DisplayAnimation
              animation={HeaderBackground}
              animationName={"HeaderBackground"}
            ></DisplayAnimation>
          </div>
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div className={classes.back}>
              <Animated
                animationIn="slideInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className={classes.navbar}>
                  <span className={classes.headerElements}>Me</span>
                  <span className={otherClasses}>Education</span>
                  <span className={otherClasses}>Tech Stack</span>
                  <span className={otherClasses}>Projects</span>
                  <span className={otherClasses}>Connect</span>
                  <span className={otherClasses}>About</span>
                </div>
              </Animated>
              <Animated
                animationIn="slideInLeft"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={1400}
              >
                <div className={classes.intro}>
                  <h1 className={classes.sideText}>Hey, I'm</h1>
                  <div className={classes.media_avatarBack}>
                    <DisplayAnimation
                      animation={AvatarBackground}
                      animationName={"AvatarBackground"}
                    ></DisplayAnimation>
                  </div>
                  <div className={classes.media_avatar}>
                    <DisplayAnimation
                      animation={Avatar}
                      animationName={"Avatar"}
                    ></DisplayAnimation>
                  </div>
                  <svg width="70%" height="50%">
                    <defs>
                      <pattern
                        id="polka-dots"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                      </pattern>
                      <style>
                        @import url("https://fonts.googleapis.com/css?
                        family=Lora:200,400i,300,700i");
                      </style>
                    </defs>

                    <text x="50%" y="60%" text-anchor="middle">
                      Pranjal Dubey
                    </text>
                  </svg>
                  <h3 className={classes.sideTexth2}>
                    [And this is a demo project]
                  </h3>
                </div>
                <div className={classes.bounce}>Explore More</div>
              </Animated>
            </div>
          </Animated>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div>
          <div className={classes.HeaderBackground}>
            <DisplayAnimation
              animation={HeaderBackground}
              animationName={"HeaderBackground"}
            ></DisplayAnimation>
          </div>
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div className={classes.back}>
              <Animated
                animationIn="slideInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className={classes.navbar}>
                  <span className={classes.headerElements}>Me</span>
                  <span className={otherClasses}>Education</span>
                  <span className={otherClasses}>Tech Stack</span>
                  <span className={otherClasses}>Projects</span>
                  <span className={otherClasses}>Connect</span>
                  <span className={otherClasses}>About</span>
                </div>
              </Animated>
              <Animated
                animationIn="slideInLeft"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={1400}
              >
                <div className={classes.intro}>
                  <div className={classes.ConfigureAvatar}>
                    <h1 className={classes.sideText}>Hey, I'm</h1>
                    <div className={classes.avatarBack}>
                      <DisplayAnimation
                        animation={AvatarBackground}
                        animationName={"AvatarBackground"}
                      ></DisplayAnimation>
                    </div>
                    <div className={classes.avatar}>
                      <DisplayAnimation
                        animation={Avatar}
                        animationName={"Avatar"}
                      ></DisplayAnimation>
                    </div>
                    <svg width="70%" height="50%">
                      <defs>
                        <pattern
                          id="polka-dots"
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                        </pattern>
                        <style>
                          @import url("https://fonts.googleapis.com/css?
                          family=Lora:200,400i,300,700i");
                        </style>
                      </defs>

                      <text x="50%" y="60%" text-anchor="middle">
                        Pranjal Dubey
                      </text>
                    </svg>
                  </div>

                  <h3 className={classes.sideTexth2}>
                    [And this is a demo project]
                  </h3>
                </div>
                <div className={classes.bounce}>Explore More</div>
              </Animated>
            </div>
          </Animated>
        </div>
      </Fragment>
    );
  }
};
export default Header;
