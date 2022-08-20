import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate Nextjs</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple boilerplate react with Nextjs"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
