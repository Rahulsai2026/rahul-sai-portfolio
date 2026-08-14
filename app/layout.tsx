import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Sai Boddapati — Finance Data Governance & AI Reliability",
  description: "Finance data governance, AI automation, and evaluation of reliable decision workflows.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
