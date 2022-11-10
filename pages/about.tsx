import React from "react";
import styles from "../styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
