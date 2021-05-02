import React from "react";
import styles from "./Home.module.css";
import me from "../../assets/me2.jpg";
import devscreen from "../../assets/devscreen.svg";
import { Link } from "react-router-dom";
import { copy } from "../../assets/copy";
import Chat from "../../components/Chat/Chat";

export default function Home() {
  const data = copy.Home;
  return (
    <>
      {/* use chat component */}
      <img src={me} alt="pic of me" className={styles.picOfMe}></img>

      <Chat homeLeft content={`${data.hey} ${data.Shay}`} />

      <img src={devscreen} alt="Front-end developer" id={styles.dev}></img>
      <div className={styles.rightSpeechBubble}>
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
