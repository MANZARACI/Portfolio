import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-mainColor text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
