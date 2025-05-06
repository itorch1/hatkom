import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import { ThemeProvider } from "./_contexts/ThemeProvider";
import "./globals.css";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: {
    template: '%s // MiniBlog',
    default: 'Home // MiniBlog'
  },
  description: 'Very cool blog designed by Ilya Turchenko'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <main className="container mx-auto px-4 max-w-4xl pt-5 sm:pt-10 pb-4 flex-grow max-h-[calc(100dvh-58px)]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
