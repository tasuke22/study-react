import React from "react";
import Link from "next/link";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {" "}
        <a href="/" className={classes.anchor}>
          Index
        </a>{" "}
      </Link>
      <Link href="/about">
        {" "}
        <a href="/" className={classes.anchor}>
          About
        </a>{" "}
      </Link>
    </header>
  );
}
