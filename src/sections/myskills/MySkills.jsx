import classes from "./mySkills.module.css";

function MySkills() {
  return (
    <div className={classes.myskills} id="myskills">
      <h2 className={classes.title}>My skills</h2>
      <div className={classes.firstContainer}>
        <p className={classes.heading}>Web Development</p>
        <div className={classes.logos}>
          <img src="./img/html.svg" alt="html logo" />
          <img src="./img/css.svg" alt="css logo" />
          <img src="./img/js.svg" alt="javascript logo" />
          <img src="./img/react-js.svg" alt="reactjs logo" />
          <img src="./img/php.svg" alt="php logo" />
          <img src="./img/laravel.svg" alt="laravel logo" />
          <img src="./img/wordpress.svg" alt="wordpress blue logo" />
          <img src="./img/nodejs.svg" alt="nodejs logo" />
          <img src="./img/mongodb.svg" alt="mongodb logo" />
          <img src="./img/mysql.svg" alt="mysql logo" />
        </div>
      </div>
      <div className={classes.secondContainer}>
        <p className={classes.heading}>Graphic Design and Editing</p>
        <div className={classes.logos}>
          <img src="./img/adobe-illustrator.svg" alt="adobe illustrator logo" />
          <img src="./img/adobe-photoshop.svg" alt="adobe photoshop logo" />
          <img
            src="./img/adobe-premiere-cc.svg"
            alt="adobe premiere pro logo"
          />
          <img src="./img/adobe-xd.svg" alt="adobe XD logo" />
          <img
            src="./img/after-effects-cc.svg"
            alt="adobe after effects logo"
          />
          <img src="./img/figma.svg" alt="figma logo" />
        </div>
      </div>
    </div>
  );
}

export default MySkills;
