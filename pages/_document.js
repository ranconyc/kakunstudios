import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render = () => (
    <Html dir="rtl" lang="he">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
