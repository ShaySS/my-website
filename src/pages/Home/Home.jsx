import React from "react";
import "./Home.css";
import me from "../../assets/me2.jpg";
import devscreen from "../../assets/devscreen.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <img src={me} alt="pic of me" id="me"></img>
      <div className="speech speech--right">
        <p className="textRight">
          hey, i'm{" "}
          <Link to="/whoIactuallyam" className="underline textRight">
            Shahbaz
          </Link>
        </p>
      </div>

      <img src={devscreen} alt="Front-end developer" id="dev"></img>
      <div className="speech speech--left">
        <p className="speechLeft">
          i'm a{" "}
          <Link to="/whoIam" className="underline speechLeft">
            front end developer
          </Link>
        </p>
      </div>
    </>
  );
}
