import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeamWorks",
  description: "Web app for team collaboration and project management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <h1>TeamWorks</h1>
      </header>

      <body className="page">
        {children}
      </body>
    </html>
  );
}
