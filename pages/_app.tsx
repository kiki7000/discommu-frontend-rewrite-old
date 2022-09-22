import Head from "next/head";

import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";

import "../styles/globals.css";

import NavBar from "../layouts/NavBar";

function Discommu({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />

                <title>Discommu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}

export default Discommu;
