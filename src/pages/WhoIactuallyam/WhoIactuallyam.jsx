import React from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import { copy } from "../../assets/copy";
import me from "../../assets/Me.jpg";
import styles from "./WhoIactuallyam.module.css";

export default function WhoIactuallyam() {
  const data = copy.WhoIActuallyAm;

  return (
    <>
      <div className={styles.intro}>
        <div className={styles.imageContainer}>
          <img src={me} alt="pic of me" className={styles.image}></img>
        </div>
        <div className={styles.blurb}>
          <h1>{data.blurb.Shay}</h1>
          <h2>{data.blurb.outside_the_divbox}</h2>
          <p className={styles.wellRounded}>{data.blurb.well_rounded}</p>
        </div>
      </div>
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
    </>
  );
}
