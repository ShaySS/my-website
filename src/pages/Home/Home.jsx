import React from "react";
import "./Home.css";
import me from "../../assets/me2.jpg";

export default function Home() {
  return (
    <div className="container">
      <div>
        <div id="pic">some pic</div>
      </div>
      <div>
        <img src={me} alt="pic of me"></img>
        <h1>Hey</h1>
        <p>i'm Shay</p>
      </div>
    </div>
  );
}
