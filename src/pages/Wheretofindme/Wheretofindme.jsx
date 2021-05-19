import React from "react";
import styles from "./Wheretofindme.module.css";
import { ReactComponent as Divider } from "../../assets/div.svg";
import { ReactComponent as Socials } from "../../assets/socials.svg";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twittr.png";
import github from "../../assets/github.png";
import { copy } from "../../assets/copy";

export default function Wheretofindme() {
  const data = copy.Wheretofindme;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          <h1 className={styles.thanks}>{data.thanks}</h1>
          <div className={styles.divider}>
            <Divider className={styles.curve}></Divider>
            <div className={styles.line}></div>
          </div>
          <div className={styles.blurb}>
            <p>{data.blurb}</p>
          </div>
          <a
            href="mailto:shaysiddi@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.gmail}
          >
            <img src={gmail} alt="gmail" rel="noopener noreferrer" />
          </a>
          <a
            href="https://www.linkedin.com/in/shay-siddiqui/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedin}
          >
            <img src={linkedin} alt="linkedin" rel="noopener noreferrer" />
          </a>
          <a
            href="https://twitter.com/shay_siddiqui"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.twitter}
          >
            <img src={twitter} alt="twitter" rel="noopener noreferrer" />
          </a>
          <a
            href="https://github.com/ShaySS"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.github}
          >
            <img src={github} alt="github" rel="noopener noreferrer" />
          </a>
          <Socials className={styles.socialPic} />
        </div>
      </div>
    </>
  );
}
