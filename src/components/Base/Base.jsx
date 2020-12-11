import React from "react";
import Header from "../Header/Header";
import "./Base.css";

export default function Base({ content }) {
  return (
    <div>
      <Header />
      <main>{content}</main>
    </div>
  );
}
