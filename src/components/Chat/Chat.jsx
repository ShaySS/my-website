import React from "react";
import styles from "./Chat.module.css";

export default function Chat({ content, leftSm, leftLg, right, className }) {
  return (
    <div
      className={`${styles.bubble} ${className} 
      ${leftSm ? styles.bubbleLeftSm : leftLg ? styles.bubbleLeftLg : styles.bubbleRight}`}
    >
      <p
        className={leftSm || leftLg ? styles.colorLeft : styles.colorRight}
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
    </div>
  );
}
