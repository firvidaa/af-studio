import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AF Studio — Diseño y desarrollo a medida",
  description:
    "AF Studio crea experiencias digitales con carácter: identidad de marca, sitios web y producto digital.",
  metadataBase: new URL("https://afstudio.example"),
  openGraph: {
    title: "AF Studio",
    description:
      "Diseño y desarrollo a medida para marcas que quieren destacar.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="grain bg-ink-900 text-ink-50 font-sans antialiased">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
