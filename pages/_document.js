import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument(Document) {
  return (
    <Html dir="rtl" lang="dv">
      <Head>
        <meta
          key="w"
          httpEquiv="Content-Type"
          content="text/html; charset=UTF-8"
        />

        <meta
          key="1"
          name="copyright"
          content="Copyright (c)2021 Judicial Service Commission. All Rights Reserved."
        />
        <meta
          key="3"
          name="keywords"
          content="judiciary, maldives, judges, ethics, code of conduct, judicial service commission"
        />
        <meta key="5" name="contact" content="admin@jsc.gov.mv" />
        <link
          key="5g"
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://jsc.gov.mv/annual-report-2021/img/apple-touch-icon.png"
        />
        <link
          key="5c"
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://jsc.gov.mv/annual-report-2021/img/favicon-32x32.png"
        />
        <link
          key="5c"
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://jsc.gov.mv/annual-report-2021/img/favicon-16x16.png"
        />
        <link
          key="5s"
          rel="manifest"
          href="https://jsc.gov.mv/annual-report-2021/img/site.webmanifest"
        />
        <link
          key="5ss"
          rel="mask-icon"
          href="https://jsc.gov.mv/annual-report-2021/img/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta key="54" name="msapplication-TileColor" content="#ffffff" />
        <meta key="54s" name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
