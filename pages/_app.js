import Head from "next/head";
import "../styles/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-torii.svg?v=1" sizes="any" />
        <link rel="shortcut icon" href="/favicon-torii.svg?v=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
