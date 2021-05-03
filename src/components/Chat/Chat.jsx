import React from "react";
import styles from "./Chat.module.css";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";

function Chat({ content, leftSm, leftLg, right, homeLeft, homeRight }) {
  const history = useHistory();

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

  const bubbleClass = () => {
    if (leftSm) {
      return styles.bubbleLeftSm;
    } else if (leftLg) {
      return styles.bubbleLeftLg;
    } else if (right) {
      return styles.bubbleRight;
    } else if (homeLeft) {
      return styles.homeBubbleLeft;
    } else if (homeRight) {
      return styles.homeBubbleRight;
    }
  };

  const bubbleTextColor = () => {
    if (homeLeft) {
      return styles.homeLightText;
    } else if (homeRight) {
      return styles.homeDarkText;
    } else if (right) {
      return styles.lightText;
    } else if (leftLg || leftSm) {
      return styles.darkText;
    }
  };

  return (
    <div className={bubbleClass()}>
      <p
        className={bubbleTextColor()}
        onClick={clickHandler}
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
    </div>
  );
}

export default withRouter(Chat);
