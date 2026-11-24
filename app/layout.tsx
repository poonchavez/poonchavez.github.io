import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import Providers from "@/components/Providers";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Ching Lam Lau",
  description: "Personal website and writing by Ching Lam Lau.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <Providers>
          <Sidebar />
          {children}
          <Footer />
        </Providers>
        <GoogleAnalytics gaId="G-3PKLWEDC19" />
      </body>
    </html>
  )
}
