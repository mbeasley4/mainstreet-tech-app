import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mainstreettech.com"),
  title: "Main Street Tech | Enterprise Technology Solutions",
  description:
    "Main Street Tech delivers enterprise-grade database management, application services, data analytics, IT advisory, and hosting solutions built for organizations that demand reliability and performance.",
  openGraph: {
    siteName: "Main Street Tech",
    type: "website",
    locale: "en_US",
    title: "Main Street Tech | Enterprise Technology Solutions",
    description:
      "Main Street Tech delivers enterprise-grade database management, application services, data analytics, IT advisory, and hosting solutions built for organizations that demand reliability and performance.",
    url: "https://www.mainstreettech.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Main Street Tech — Enterprise Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Main Street Tech | Enterprise Technology Solutions",
    description:
      "Main Street Tech delivers enterprise-grade database management, application services, data analytics, IT advisory, and hosting solutions built for organizations that demand reliability and performance.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PNJF8LLF');`,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PNJF8LLF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
