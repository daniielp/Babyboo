import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="da">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* Primary Meta Tags */}
          <meta
            name="title"
            content="Babyboo"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
