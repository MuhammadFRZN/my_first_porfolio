import classes from "./footer.module.css";

function Footer() {
  const footerdate = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <article>
          <h4>SAY HELLO</h4>
          <p>Cell phone, WhatsApp, Telegram</p>
          <a href="tel:+93792915284">+93 (0) 792915284</a>
          <a href="mailto:farzanmuradi@gmail.com">farzanmuradi@gmail.com</a>
        </article>
        <article>
          <h4>START A PROJECT</h4>
          <p>We are ready for the challenge</p>
        </article>

        <article className={classes.logodsc}>
          <img src="./img/mfhlogo.png" alt="logo" className={classes.mfhlogo} />
        </article>
      </div>
      <div className={classes.copyright}>
        <p>
          Copyright ™ MFH - Muhammad Farzan Haydari {footerdate} . All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
