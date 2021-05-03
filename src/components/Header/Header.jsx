import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" className={location === `/` ? styles.active : undefined}>
              home
            </Link>
          </li>
          <li>
            <Link to="/whatIdo" className={location === `/whatIdo` ? styles.active : undefined}>
              what i do
            </Link>
          </li>
          <li>
            <Link to="/whoIam" className={location === `/whoIam` ? styles.active : undefined}>
              who i am
            </Link>
          </li>
          <li>
            <Link
              to="/wheretofindme"
              className={location === `/wheretofindme` ? styles.active : undefined}
            >
              where to find me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
