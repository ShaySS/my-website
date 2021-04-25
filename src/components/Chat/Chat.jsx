import React from "react";
import "./Chat.css";

export default function Chat({ content, leftSm, leftLg, right, className }) {
  return (
    <div
      className={`bubble ${className} ${
        leftSm ? "bubbleLeftSm" : leftLg ? "bubbleLeftLg" : "bubble--right"
      }`}
    >
      <p className={leftSm || leftLg ? "colorLeft" : "colorRight"}>{content}</p>
    </div>
  );
}
