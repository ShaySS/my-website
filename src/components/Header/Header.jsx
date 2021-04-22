import React, { useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation().pathname;
  
  useEffect(() => {
    console.log(`Location changed to ${location}`);
  }, [location]);

  return (
    <>
      <nav>
        <ul className="navLinks">
          <li>
            <Link to="/" className={location === `/` ? `active` : undefined}>home</Link>
          </li>
          <li>
            <Link to="/whoIam" className={location === `/whoIam` ? `active` : undefined}>who i am</Link>
          </li>
          <li>
            <Link to="/whoIactuallyam" className={location === `/whoIactuallyam` ? `active` : undefined}>who i actually am</Link>
          </li>
          <li>
            <Link to="/whatIdo" className={location === `/whatIdo` ? `active` : undefined}>what i do</Link>
          </li>
          <li>
            <Link to="/wheretofindme" className={location === `/wheretofindme` ? `active` : undefined}>where to find me</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
