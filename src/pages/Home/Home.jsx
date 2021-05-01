import React from "react";
import styles from "./Home.module.css";
import me from "../../assets/me2.jpg";
import devscreen from "../../assets/devscreen.svg";
import { Link } from "react-router-dom";
import { copy } from "../../assets/copy";

export default function Home() {
  const data = copy.Home;
  return (
    <>
      <img src={me} alt="pic of me" id={styles.me}></img>
      <div className={`${styles.speech} ${styles.speechLeft}`}>
        <p className={styles.textLeft}>
          {data.hey}
          <Link to="/whoIactuallyam" className={`${styles.underline} ${styles.textLeft}`}>
            {data.Shay}
          </Link>
        </p>
      </div>

      <img src={devscreen} alt="Front-end developer" id={styles.dev}></img>
      <div className={`${styles.speech} ${styles.speechRight}`}>
        <p className={styles.textRight}>
          {data.im_a}
          <Link to="/whoIam" className={`${styles.underline} ${styles.textRight}`}>
            {data.front_end_dev}
          </Link>
        </p>
      </div>
    </>
  );
}
