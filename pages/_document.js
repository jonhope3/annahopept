import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/*/!* Preload optimized image *!/*/}
                    {/*<link*/}
                    {/*    rel="preload"*/}
                    {/*    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/beach-hd.webp`}*/}
                    {/*    as="image"*/}
                    {/*/>*/}
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
