import { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let allImages = document.querySelectorAll("img");
    allImages.forEach((value) => {
      value.oncontextmenu = (e) => {
        e.preventDefault();
      };
    });
  }, []);
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-M8NJ47",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <div>
      <Head>
        {/* <link rel="shortcut icon" href={favicon} /> */}
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <title>
          Cashio - Home | Borderless payments accross social platforms
        </title>
        <meta
          name="description"
          content="Cashio wallet is a payment platform that processes payment accross social platforms like Twitter, facebook, instagram"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://mycashiowallet.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cashio" />
        <meta
          property="og:description"
          content="Cashio wallet is a payment platform that processes payment accross social platforms like Twitter, facebook, instagram"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/cashio-1ccdd.appspot.com/o/blue big.png?alt=media&token=7cf45ee7-54bc-4dcd-96f8-876fac443cde"
        />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mycashiowallet.com" />
        <meta property="twitter:url" content="https://mycashiowallet.com/" />
        <meta name="twitter:title" content="Cashio" />
        <meta
          name="twitter:description"
          content="Cashio wallet is a payment platform that processes payment accross social platforms like Twitter, facebook, instagram"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/cashio-1ccdd.appspot.com/o/blue big.png?alt=media&token=7cf45ee7-54bc-4dcd-96f8-876fac443cde"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
