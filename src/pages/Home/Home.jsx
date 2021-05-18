import React from "react";
import styles from "./Home.module.css";
import me from "../../assets/me2.jpg";
import devscreen from "../../assets/devscreen.svg";
import { copy } from "../../assets/copy";
import Chat from "../../components/Chat/Chat";

export default function Home() {
  const data = copy.Home;
  return (
    <div className={styles.container}>
      <img src={me} alt="pic of me" className={styles.picOfMe}></img>
      <div className={styles.leftBubble}>
        <Chat BL content={data.hey} />
      </div>

      <div className={styles.rightBubble}>
        <Chat BR content={`${data.im_a} ${data.front_end_dev}`} />
      </div>
      <img src={devscreen} alt="Front-end developer" className={styles.devscreen}></img>
    </div>
  );
}
