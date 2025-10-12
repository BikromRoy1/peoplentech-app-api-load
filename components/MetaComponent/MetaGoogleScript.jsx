import Script from "next/script";

function MetaGoogleScript() {
  return (
    <>
      {/* Your meta tags */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XZDH1HZ0XG"
      ></Script>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XZDH1HZ0XG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XZDH1HZ0XG');
        `}
      </Script>
    </>
  );
}

export default MetaGoogleScript;
