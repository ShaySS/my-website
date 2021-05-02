import React from "react";
import styles from "./Chat.module.css";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";

function Chat({ content, leftSm, leftLg, right, className, homeLeft, homeRight }) {
  let bubbleType;
  const history = useHistory();

  const clickHandler = (e) => {
    // * If its not the link that's meant to act as a regular a link (AKA the AWS one)...
    // * intercept the <a> link from copy and mimic <Link> behaviour
    // * (by rerouting and not causing browser refresh)
    if (!e.target.href.includes("AWS")) {
      const targetLink = e.target.closest("a");
      if (!targetLink) return;
      e.preventDefault();
      const nav = targetLink.href.substring(targetLink.href.lastIndexOf("/") + 1);
      history.push(nav);
    }
  };

  if (leftSm) {
    bubbleType = styles.bubbleLeftSm;
  } else if (leftLg) {
    bubbleType = styles.bubbleLeftLg;
  } else if (homeLeft) {
    bubbleType = styles.homeBubbleLeft;
  } else if (homeRight) {
    bubbleType = styles.homeBubbleRight;
  } else if (right) {
    bubbleType = styles.bubbleRight;
  }

  let bubbleClass = `${styles.bubble} className + ${bubbleType}`;

  return (
    <div className={bubbleClass}>
      <p
        className={leftSm || leftLg ? styles.colorLeft : styles.colorRight}
        onClick={clickHandler}
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
    </div>
  );
}

export default withRouter(Chat);
