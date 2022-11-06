import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        var = 123;
        <title>Index page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>Index Page</code>
        </p>

        <Links />
      </main>
      <Footer />
    </div>
  );
}
