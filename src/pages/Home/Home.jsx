import React from "react";
import styles from "./Home.module.css";
import me from "../../assets/me2.jpg";
import devscreen from "../../assets/devscreen.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <img src={me} alt="pic of me" id={styles.me}></img>
      <div className={`${styles.speech} ${styles.speechRight}`}>
        <p className={styles.textRight}>
          hey, i'm{" "}
          <Link to="/whoIactuallyam" className={`${styles.underline} ${styles.textRight}`}>
            Shay
          </Link>
        </p>
      </div>

      <img src={devscreen} alt="Front-end developer" id={styles.dev}></img>
      <div className={`${styles.speech} ${styles.speechLeft}`}>
        <p className={styles.textLeft}>
          i'm a{" "}
          <Link to="/whoIam" className={`${styles.underline} ${styles.textLeft}`}>
            front end developer
          </Link>
        </p>
      </div>
    </>
  );
}
