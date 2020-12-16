import React from "react";
import "./Wheretofindme.css";
import { ReactComponent as Divider } from "../../assets/div.svg";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twittr.png";

export default function Wheretofindme() {
  return (
    <>
      <h1 id="thanks">Thanks for stopping by</h1>
      <Divider className="curve"></Divider>
      <div className="line"></div>
      <div id="contactIcons">
        <img
          src={gmail}
          className="mediaIcon"
          alt="gmail"
          rel="noopener noreferrer"
        />
        <img
          src={linkedin}
          className="mediaIcon"
          alt="linkedin"
          rel="noopener noreferrer"
        />
        <img
          src={twitter}
          className="mediaIcon"
          alt="twitter"
          rel="noopener noreferrer"
        />
      </div>
      <ul id="contactLinks">
        <li>
          <a href="shaysiddi@gmail.com" target="_blank">
            shaysiddi@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shay-siddiqui/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/shay-siddiqui/
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/shay_siddiqui"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://twitter.com/shay_siddiqui
          </a>
        </li>
      </ul>
    </>
  );
}
