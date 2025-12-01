import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/providers/ThemeProviders";

const vazirmatn = localFont({
  src: "../public/fonts/vazirmatn/Vazirmatn-Regular.woff2",
});

export const metadata: Metadata = {
  title: "shapika",
  description: "فروشگاه حرفه‌ای با Next.js و Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.className} antialiased min-h-screen bg-gradient-light dark:bg-gradient-dark`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
