import { Fragment } from "react";
import { saveAs } from "file-saver";
import FileSaver from "file-saver";
import classes from "./About.module.css";
const About = () => {
  //for downloading resume
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "../../public/resume.pdf",
      "resume.pdf"
    );
  };
  const url =
    "https://drive.google.com/file/d/17-BOC8jsA05968Qrr5KJudL-Nr1Qq8re/view?usp=sharing";
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
            Now I started sharing my interest with React too. Thats two
            completely different domains , but they work together !
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
          why not seek guidance, right? Actually , I was having a hard time
          believing how much this field has grown in recent years/months. Three
          years back ,{" "}
          <span className={classes.color}>
            it was a rare to see AI practitioners walking past just like
            ordinary people , a real example of people following the trend !
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
        {/* <button
          className="cv"
          onClick={() => {
            window.location.href =
              "https://drive.google.com/open?id=17-BOC8jsA05968Qrr5KJudL-Nr1Qq8re";
          }}
        >
          Redirect to Resume
        </button> */}

        <div className={classes._container}>
          <button
            className={classes.about_button}
            data-content="View Resume"
            onClick={() => {
              window.location.href =
                "https://drive.google.com/open?id=17-BOC8jsA05968Qrr5KJudL-Nr1Qq8re";
            }}
          >
            Download Resume
          </button>
        </div>

        <ul className={classes["social"]} id="social">
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
