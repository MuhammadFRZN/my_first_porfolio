import classes from "./about.module.css";

function About() {
  return (
    <div className={classes.about} id="about">
      <h2 className={classes.title}>About me</h2>
      <div className={classes.card}>
        <div className={classes.left}>
          <img src="./img/avatar.jpg" alt="profile" />
          <h4 className={classes.fullname}>Muhammad Farzan Haydari</h4>
          <p>Graphic Designer &amp; Web Developer</p>
        </div>
        <div className={classes.right}>
          <h4 className={classes.question}>Who am I?</h4>
          <p>
            A self taught web developer either a graphic designer who is able to
            start a project from scratch all the way to production in a well
            managed and ordered way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
