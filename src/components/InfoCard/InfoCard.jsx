import React from "react";
import styles from "./InfoCard.module.css";

export default function infoCard({ cardStyle, heading, body }) {
  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.heading} 
            ${styles[cardStyle + "HeadingBackground"]}`}
        >
          <p className={`${styles[cardStyle + "HeadingText"]}`}>{heading}</p>
        </div>
        <div className={`${styles.body} ${styles[cardStyle + "BodyBackground"]}`}>
          <p
            className={`${styles[cardStyle + "BodyText"]}`}
            dangerouslySetInnerHTML={{ __html: body }}
          ></p>
        </div>
      </div>
    </>
  );
}
