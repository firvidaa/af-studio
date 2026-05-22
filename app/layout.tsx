import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AF Studio — Diseno y desarrollo a medida",
  description:
    "AF Studio crea experiencias digitales con caracter: identidad de marca, sitios web y producto digital.",
  metadataBase: new URL("https://afstudio.example"),
  openGraph: {
    title: "AF Studio",
    description:
      "Diseno y desarrollo a medida para marcas que quieren destacar.",
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
    <html lang="es" className={inter.variable}>
      <body className="grain bg-ink-900 text-ink-50 font-sans antialiased">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
