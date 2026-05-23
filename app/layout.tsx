import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const helveticaNeue = localFont({
  src: [
    { path: "../public/fonts/HelveticaNeueLTStd-LtCn.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/HelveticaNeueLTStd-Cn.otf",   weight: "400", style: "normal" },
    { path: "../public/fonts/HelveticaNeueLTStd-MdCn.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/HelveticaNeueLTStd-BdCn.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});

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
    <html lang="en" className={helveticaNeue.variable}>
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
