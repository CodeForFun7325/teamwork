import type { Metadata } from "next";
import "./style/globals.css";
import MobileNav from "./components/nav/mobileNav";

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
        <header className="menu-header">
          <h2>Teamworks</h2>
          <MobileNav />
        </header>
        {children}
      </body>
    </html>
  );
}
