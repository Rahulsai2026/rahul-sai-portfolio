import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Sai Boddapati — AI Platform & Agentic Systems Portfolio",
  description: "Evaluation, governance, and failure-mode testing for AI decision workflows.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
