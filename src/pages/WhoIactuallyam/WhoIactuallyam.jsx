import React from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import { copy } from "../../assets/copy";

export default function WhoIactuallyam() {
  const data = copy.WhoIActuallyAm;

  return (
    <>
      <div>who i actually am</div>
      <InfoCard
        cardStyle="primary"
        heading={data.primary.heading}
        body={data.primary.body}
      />
      <InfoCard
        cardStyle="secondary"
        heading={data.secondary.heading}
        body={data.secondary.body}
      />
      <InfoCard
        cardStyle="tertiary"
        heading={data.tertiary.heading}
        body={data.tertiary.body}
      />
    </>
  );
}
