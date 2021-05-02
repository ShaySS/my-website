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
      <img src={me} alt="pic of me" className={styles.picOfMe}></img>
      <Chat homeLeft content={`${data.hey} ${data.Shay}`} />

      <img src={devscreen} alt="Front-end developer" id={styles.dev}></img>
      <Chat homeRight content={`${data.im_a} ${data.front_end_dev}`} />
    </>
  );
}
