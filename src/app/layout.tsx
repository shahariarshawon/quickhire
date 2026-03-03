import type { Metadata } from "next";
import { Epilogue, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
export const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});

export const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});


export const metadata: Metadata = {
  title: "QuickHire",
  description: "Hire the best talent for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${redHatDisplay.variable} antialiased`}
      >
        <main>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
