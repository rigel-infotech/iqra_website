import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { Amiri } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IQRA",
  description: "",
};

const amiri = Amiri({
  subsets: ["arabic"], // or ["latin", "arabic"] if you also want English
  weight: ["400", "700"], // choose weights you need
  variable: "--font-amiri",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${amiri.variable}`} >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
