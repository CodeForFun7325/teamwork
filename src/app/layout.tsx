import type { Metadata } from "next";
import MobileNav from "./components/nav/mobileNav";
import "./globals.css";
import "./style.css"; 

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

      <body className="page">
        <header className="home-page-header">
          <h1>TeamWorks</h1>
          <MobileNav />
        </header>
        {children}
      </body>
    </html>
  );
}
