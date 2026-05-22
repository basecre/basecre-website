import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Base CRE | Industrial Real Estate Advisory",
  description:
    "Base CRE advises owners, investors, and operators on the acquisition, disposition, and leasing of industrial real estate across Arizona. Specializing in IOS, ISF, and single-tenant industrial assets.",
  metadataBase: new URL("https://basecre.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 — G-QMWN71DT17 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QMWN71DT17"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QMWN71DT17');
          `}
        </Script>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
