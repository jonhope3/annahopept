import Head from 'next/head';
import '../styles/globals.scss';
import React from "react";
import {PT_Sans, Sofia_Sans_Condensed} from "next/font/google";

// Optimize Google Fonts
const ptSans = PT_Sans({weight: ["400", "700"], subsets: ["latin"], display: "swap"});
const sofiaSansCondensed = Sofia_Sans_Condensed({weight: ["300", "400", "700"], subsets: ["latin"], display: "swap"});

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <title>Anna Hope</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:type" content="website"/>
            </Head>
            {/* Apply fonts globally */}
            <main className={`${ptSans.className} ${sofiaSansCondensed.className}`}>
                <Component {...pageProps} />
            </main>
        </>
    );
}