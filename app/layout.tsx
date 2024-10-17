import { Providers } from "./providers";
import Navbar from "./Navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Company",
  description: "Welcome to Your Company's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark:bg-gray-900">
      <body>
        <Providers>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
