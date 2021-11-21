import classes from "./hero.module.css";

function Hero() {
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.herotxt}>
        <p>I am here to do all the stuff</p>
        <h1>
          FROM DESIGN
          <br />
          TO CODE
        </h1>
        <p>Graphic Designer | Web Developer</p>
        <a href="#contact" className={classes.cta}>
          Contact me
        </a>
        <br />
        <a href="#myworks">
          <img src="./img/arrow.png" alt="arrow" className={classes.arrow} />
        </a>
      </div>
      <img
        src="./img/hero.jpg"
        alt="hero-background"
        className={classes.herobg}
      />
    </div>
  );
}

export default Hero;
