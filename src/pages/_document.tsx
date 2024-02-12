import { Html, NextScript, Main, Head } from "next/document";
import Document from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <title>CID 謎解き - CID EXPO 2024</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;