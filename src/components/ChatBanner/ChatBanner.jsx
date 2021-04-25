import React from "react";
import styles from "./ChatBanner.module.css";
import { ReactComponent as Me } from "../../assets/chatMe.svg";
import { copy } from "../../assets/copy";

export const ChatBanner = ({ content }) => {
  const data = copy;
  return (
    <>
      <header>
        <div className={styles.container}>
          <Me />
          <h2 className={styles.chattingWith}>{content}</h2>
        </div>
        <div className={styles.container}>
          <span className={styles.icons}>{data.WhoIAm.banner.info_icon}</span>
          <span className={styles.icons}>{data.WhoIAm.banner.call_icon}</span>
        </div>
      </header>
    </>
  );
};
