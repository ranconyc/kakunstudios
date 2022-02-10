import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render = () => (
    <Html dir="rtl" lang="he">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-sand-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
