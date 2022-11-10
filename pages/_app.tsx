import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  <>
    <Head>
      <title>Index page</title> 
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>;
  const [state] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);
  return <Component {...pageProps} />;
}
