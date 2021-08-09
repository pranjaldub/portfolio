import { Fragment } from "react";
import classes from "./About.module.css";
const About = () => {
  return (
    <div className={classes.about}>
      <header className={classes.masthead}>
        <p className={classes["masthead-intro"]}>Guess it's time </p>
        <p className={classes["masthead-intro"]}>To tell you</p>
        <h3 className={classes["masthead-heading"]}>
          <p className={classes.shining}>What you dont know ...yet !</p>
        </h3>
        {/* <p className={classes.shining}> What you dont know ...yet</p> */}
      </header>

      <section className={classes["introduction-section"]}>
        <h1>About me</h1>
        <p>
          <span className={classes.color}>Full Stack developer</span> by day and
          a wannabe <span className={classes.color}>data scientist</span> by
          night . Creator of this portfolio :) ..thanks to codepen contributors
          (especially me ) .
        </p>
        <p>
          <span className={classes.color}>Connect for collab !</span>
        </p>
      </section>

      <section className={classes["location-section"]}>
        <h1>What do I do ?</h1>

        <p>
          I currently work as a{" "}
          <span className={classes.color}>System Engineer</span> for Infosys ,
          having trained on&nbsp;
          <span className={classes.color}>
            Microsoft Full Stack development
          </span>{" "}
          (&nbsp;it was good !&nbsp;). Independently , I pursue the idea of
          becoming a ML Practitioner but in recent months with exposure to web
          development ,{" "}
          <span className={classes.color}>
            Now share my time with React and Angular
          </span>
          .
        </p>
      </section>

      <section className={classes["questions-section"]}>
        <h1>More about me ?</h1>

        <p>
          Well , I like reading{" "}
          <span className={classes.color}>
            medium articles on computer vision
          </span>{" "}
          and no , I havent bought the premium subscription yet (neither do I
          have any plans) .{" "}
          <span className={classes.color}>
            Money dieting will surely help later
          </span>
          .
        </p>

        <p>
          Enjoyed (not wasted) my first two years of graduation engaged into{" "}
          <span className={classes.color}>PC gaming</span> . Had such a smooth
          transition the I didnt know myself when I drifted into programming
          while keeping the enjoyment state intact !{" "}
        </p>

        <p>
          <span className={classes.color}>
            I now I do both , and you know what ? It's fun .
          </span>
        </p>

        <h1>Why I chose AI? </h1>
        <p>
          I would'nt say it was all planned or I had interest from the start .
          Infact I didnt knew what it was actually untill second year (first two
          years I passed with decent grades didnt knowing what I was studying
          xD.)
        </p>
        <p>
          <span className={classes.color}>
            It was third year when I started AI{" "}
          </span>
          taking help from life saviour Google.<br></br>You would be thinking ,
          why not seek guidance, right? Actually , I's having a hard time
          believing how much this field has grown in recent years/months. Three
          years back ,{" "}
          <span className={classes.color}>
            it was a rare to see AI practitioners walking past just like
            ordinary people !
          </span>{" "}
          Yes , it was that rare , or maybe I wasnt fully aware (I can prove
          this point easily , just imagining playing day and night for two years
          , bunking classes , not intentionally though . Waking up after all
          this is tough you know .) .<br></br>
          This was some brief about old me and I wont go much deeper into
          younger me (dont want to make last section the most boring one!) .
        </p>
      </section>

      <footer className={classes["site-padding"]}>
        <p>
          <span className={classes.color}>
            You came this far , dont leave without connecting !
          </span>
        </p>
        <ul className={classes["social"]}>
          <li>
            <a href="https://github.com/pranjaldub">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pranjal-d-6060a2183/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/13990024/pranjal-dubey">
              Stack Overflow+
            </a>
          </li>
        </ul>
        <p>
          <a href="https://lottiefiles.com/" alt="LottieFiles">
            <strong>
              Lots of credits to LottieFiles for amazing animated SVGs
            </strong>
          </a>
        </p>
      </footer>
    </div>
  );
};
export default About;
