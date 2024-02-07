import { Html, NextScript, Main, Head } from "next/document";
import Document from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>CID 謎解き - CID EXPO 2024</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body style={{
          backgroundColor: "#000000",
        }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;