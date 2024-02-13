import { Html, NextScript, Main, Head } from "next/document";
import HMeta from "../content/hmeta";

function MyDocument() {
  return (
    <Html>
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;