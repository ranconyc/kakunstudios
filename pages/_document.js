import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render = () => (
    <Html dir="rtl" lang="he">
      <Head />
      <body className="bg-sand-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
