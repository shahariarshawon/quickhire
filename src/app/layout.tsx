import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
})

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
        className={`${epilogue.className} antialiased`}
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
