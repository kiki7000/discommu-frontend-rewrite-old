import Document, { Html, Head, Main, NextScript } from "next/document";

export default class RootDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#738ADB" />
                    <meta
                        name="description"
                        content="Discommu"
                    />
                    <meta name="keywords" content="discord,discommu" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
