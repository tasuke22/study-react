import React from "react";
import styles from "../styles/Home.module.css";

export function Headline(props: any) {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">{props.page} Page</a>
      </h1>
      <p className={styles.description}>Get started by editing {props.code}</p>
    </div>
  );
}
