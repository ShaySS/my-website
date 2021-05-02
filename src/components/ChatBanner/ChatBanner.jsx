import React from "react";
import styles from "./ChatBanner.module.css";
import { ReactComponent as Me } from "../../assets/chatMe.svg";
import { copy } from "../../assets/copy";
import { Link } from "react-router-dom";

export const ChatBanner = ({ content }) => {
  const data = copy;
  return (
    <>
      <header>
        <div className={styles.container}>
          <Link to="/">
            <Me />
          </Link>
          <h2 className={styles.chattingWith}>{content}</h2>
        </div>
        <div className={styles.container}>
          <Link to="/whoIactuallyam">
            <span className={styles.icons}>{data.WhatIdo.banner.info_icon}</span>
          </Link>
          <Link to="/wheretofindme">
            <span className={styles.icons}>{data.WhatIdo.banner.call_icon}</span>
          </Link>
        </div>
      </header>
    </>
  );
};
