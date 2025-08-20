import type { Metadata } from "next";
import "./style/globals.css";

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
        {children}
      </body>
    </html>
  );
}
