import React from "react";
import classes from "src/components/Headline/Headline.module.css";

export function Headline(props: any) {
  return (
    <div>
      <h1 className={classes.title}>
        Welcome to <a href="https://nextjs.org">{props.page} Page</a>
      </h1>
      <p className={classes.description}>Get started by editing {props.code}</p>
    </div>
  );
}
