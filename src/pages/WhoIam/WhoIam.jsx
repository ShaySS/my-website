import React from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import { copy } from "../../assets/copy";
import me from "../../assets/Me.jpg";
import styles from "./WhoIam.module.css";
import { ReactComponent as ScrollDown } from "../../assets/scrolldown.svg";

export default function WhoIam() {
  const data = copy.WhoIam;

  const click = () => {
    window.scrollBy(0, document.body.scrollHeight);
  };

  return (
    <>
      <div className={styles.gridContainer}>
        <img src={me} alt="pic of me" className={styles.image}></img>
        <div className={styles.blurb}>
          <h1>{data.blurb.Shay}</h1>
          <h2>{data.blurb.outside_the_divbox}</h2>
          <p className={styles.wellRounded}>{data.blurb.well_rounded}</p>
        </div>
        <ScrollDown className={styles.scrollDown} onClick={click} />
      </div>
      <div className={styles.cards}>
        <InfoCard
          cardStyle="primary"
          heading={data.cards.primary.heading}
          body={data.cards.primary.body}
        />
        <div className={styles.right}>
          <InfoCard
            cardStyle="secondary"
            heading={data.cards.secondary.heading}
            body={data.cards.secondary.body}
          />
        </div>
        <InfoCard
          cardStyle="tertiary"
          heading={data.cards.tertiary.heading}
          body={data.cards.tertiary.body}
        />
      </div>
    </>
  );
}
