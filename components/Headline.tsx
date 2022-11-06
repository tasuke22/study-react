import React from "react";
import styles from "../styles/Home.module.css";

export default function Headline(props: any) {
  console.log(props);

  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">{props.page} Page</a>
      </h1>
      <p className={styles.description}>
        Get started by editing <code className={styles.code}>{props.page}</code>
      </p>
    </div>
  );
}
