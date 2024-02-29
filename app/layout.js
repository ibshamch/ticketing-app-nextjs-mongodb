import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./{components}/Navigation";

import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket App",
  description: "Made for Real Funnel Media Internship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-container flex flex-col h-screen max-h-screen">
          <Navigation />
          <div className="flex-grow overflow-y-auto bg-page text-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
