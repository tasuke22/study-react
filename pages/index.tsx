import React from "react";
import classes from "../styles/Home.module.css";
import { Footer } from "../src/components/Footer";
import { Main } from "../src/components/Main";
import { Header } from "../src/components/Header";

export default function Home() {
  return (
    <div className={classes.container}>
      <Header />

      <Main page="index" />

      <Footer />
    </div>
  );
}
