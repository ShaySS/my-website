import React from "react";
import styles from "./Chat.module.css";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";

const Chat = ({ content, BR, BL, TR, TL }) => {
  const history = useHistory();

  const bubbleSide = () => {
    if (BR) return styles.bubbleBR;
    else if (BL) return styles.bubbleBL;
    else if (TR) return styles.bubbleTR;
    else if (TL) return styles.bubbleTL;
  };

  const clickHandler = (e) => {
    // * If its not the link that's meant to act as a regular a link (AKA the AWS one)...
    // * intercept the <a> link from copy and mimic <Link> behaviour
    // * (by rerouting and not causing browser refresh)
    const targetLink = e.target.closest("a");
    if (!targetLink) return;
    console.log(e.target.href);
    if (!e.target.href.includes("AWS") && !e.target.href.includes("Resume")) {
      e.preventDefault();
      const nav = targetLink.href.substring(targetLink.href.lastIndexOf("/") + 1);
      history.push(nav);
    }
  };

  return (
    <>
      <div className={bubbleSide()}>
        <p onClick={clickHandler} dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </>
  );
};

export default withRouter(Chat);
