import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [state] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);
  return <Component {...pageProps} />;
}
