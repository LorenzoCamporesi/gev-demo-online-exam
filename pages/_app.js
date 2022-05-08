import '../styles/global.css'
import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Prova quiz GEV 2022</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
