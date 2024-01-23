import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import Script from 'next/script';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="app-wrapper">
      {/* <!-- Google tag (gtag.js) -->*/}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RDV8D9E43K"
      ></Script>

      <Script id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RDV8D9E43K');`}
      </Script>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <link rel="icon" type="image/x-icon" href="//favicon.ico" /> */}
        <>
          <meta
            property="og:title"
            content="Fortuna Finance - AI enabled multi chain staking platform"
          />
          <meta
            property="og:description"
            content="Fortuna Finance offers an intuitive staking and farming platform with a robust selection of pools. Participate in Yield farming with our AI yield aggregator"
          />
          <meta property="og:image" content="/og.png" />
          <meta property="og:url" content="/" />
        </>

        <title>Fortuna Finance - AI enabled multi chain staking platform</title>
      </Head>
      <Header />

      {children}

      <Footer />
    </div>
  );
}
