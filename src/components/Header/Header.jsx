import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <ul className="navLinks">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/whoIam">who i am</Link>
          </li>
          <li>
            <Link to="/whoIactuallyam">who i actually am</Link>
          </li>
          <li>
            <Link to="/whatIdo">what i do</Link>
          </li>
          <li>
            <Link to="/wheretofindme">where to find me</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
