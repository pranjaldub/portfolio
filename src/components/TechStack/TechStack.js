import { Fragment } from "react";
import classes from "../TechStack/TechStack.module.css";
//import Display from "./Display";

const TechStack = () => {
  const percentage = 66;

  return (
    <Fragment>
      <div className={classes.body}>
        <header className={classes.heading}>
          <h2>My Tech Stack</h2>

          <hr className={classes.underline}></hr>
        </header>
        <div className={classes.container}>
          <div className={classes.card}>
            <h3 className={classes.title}>Languages</h3>
            <div className={classes.content}>
              <ul>
                <li>Python</li>
                <li>Typescript</li>
                <li>Javascript</li>
                <li>C Sharp</li>
              </ul>
            </div>
          </div>
          <div className={classes.card}>
            <h3 className={classes.title}>Frontend</h3>
            <div className={classes.content}>
              <ul>
                <li>Angular 2+</li>
                <li>React Js</li>
                <li>Animate.css</li>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>Bootstrap4</li>
                <li>Angular Material</li>
              </ul>
            </div>
          </div>
          <div className={classes.card}>
            <h3 className={classes.title}>Backend</h3>
            <div className={classes.content}>
              <ul>
                <li>SQL Server</li>
                <li>Entity Framework Core</li>
                <li>ASP.NET Core</li>
                <li>Flask</li>
                <li>FastAPI</li>
              </ul>
            </div>
          </div>
          <div className={classes.card}>
            <h3 className={classes.title}>Machine Learning</h3>
            <div className={classes.content}>
              <ul>
                <li>Numpy</li>
                <li>Pandas</li>
                <li>Scikit Learn</li>
                <li>Matplotlib/seaborn</li>
                <li>Keras</li>
                <li>Pytorch</li>
                <li>Spacy</li>
                <li>NLTK</li>
                <li>OpenCV</li>
                <li>H20 ML</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TechStack;
