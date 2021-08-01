import { Fragment } from "react";
import classes from "../Education/Education.module.css";
import ScrollAnimation from "react-animate-on-scroll";
const Education = () => {
  return (
    <Fragment>
      <div className={classes.body}>
        <header className={classes.heading}>
          <h2>Education Details</h2>
          <hr className={classes.underline}></hr>
        </header>
        <ScrollAnimation
          animateIn="slideInDown faster"
          animateOut="None"
          animateOnce="true"
          duration={0.5}
          delay={0}
        >
          <div className={classes.timeline}>
            <ul>
              <li>
                <div className={classes.right_content}>
                  <h2>Systems Engineer</h2>
                  <p>
                    Working at Infosys Ltd. as Systems Engineer(Full-Time) with
                    a great tech stack (Microsoft) of Full Stack Development.{" "}
                    <br></br>Worked on Angular , C Sharp , SQL Server and Azure
                    DevOps and still learning !
                  </p>
                </div>
                <div className={classes.left_content}>
                  <h3>February 2021 to Present </h3>
                </div>
              </li>

              <li>
                <div className={classes.right_content}>
                  <h2>Galgotias University</h2>
                  <p>
                    Bachelor Of Technology in Computer Science with
                    specialization in Artificial Intelligence and Machine
                    Learning . <br></br>
                    Major Project - Head Pose Estimation of masked faces{" "}
                    <br></br>
                    CGPA : 7.77
                  </p>
                </div>
                <div className={classes.left_content}>
                  <h3>August 2017 to August 2021</h3>
                </div>
              </li>

              <li>
                <div className={classes.right_content}>
                  <h2>Science Student</h2>
                  <p>
                    Secondary and Higher Secondary education from Spring Dale
                    College , Lucknow <br></br>X - 86% XII - 76%
                  </p>
                </div>
                <div className={classes.left_content}>
                  <h3>February 2021 to Present </h3>
                </div>
              </li>

              <div style={{ clear: "both" }}></div>
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    </Fragment>
  );
};
export default Education;
