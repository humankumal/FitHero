import type { Metadata, Viewport } from "next";
import { Geist, Sora } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fithero.example.com"),
  title: {
    default: "Fit Hero — Train your body. Calm your mind. Upgrade your life.",
    template: "%s | Fit Hero",
  },
  description:
    "Fit Hero brings training, yoga, meditation, and life-enhancement skills into one guided transformation platform.",
  openGraph: {
    title: "Fit Hero",
    description:
      "Training, yoga, meditation, and life-enhancement skills in one guided transformation platform.",
    type: "website",
    siteName: "Fit Hero",
  },
};

export const viewport: Viewport = {
  themeColor: "#060a13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${sora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-mint-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
