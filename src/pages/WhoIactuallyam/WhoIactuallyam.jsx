import React from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import { copy } from "../../assets/copy";
import styles from "./WhoIactuallyam.module.css";

export default function WhoIactuallyam() {
  const data = copy.WhoIActuallyAm;

  return (
    <>
      <div className={styles.intro}>
        <div>pic of me</div>
        <div>
          <h1>Shahbaz,</h1>
          <h2>{`outside the <div id='box'/>`}</h2>
          <div>
            i’m a big believer in being a well-rounded person, here’s me outside of the coding world
          </div>
        </div>
      </div>
      <InfoCard cardStyle="primary" heading={data.primary.heading} body={data.primary.body} />
      <div className={styles.right}>
        <InfoCard
          cardStyle="secondary"
          heading={data.secondary.heading}
          body={data.secondary.body}
        />
      </div>
      <InfoCard cardStyle="tertiary" heading={data.tertiary.heading} body={data.tertiary.body} />
    </>
  );
}
