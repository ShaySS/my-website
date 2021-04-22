import React from "react";
import "./Chat.css";

export default function Chat({ content, left, right, className }) {
  return (
    <div className={`bubble ${className} ${left ? "bubble--left" : "bubble--right"}`}>
      <p className={left ? "colorLeft" : "colorRight"}>{content}</p>
    </div>
  );
}
