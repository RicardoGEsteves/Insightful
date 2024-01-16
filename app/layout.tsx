import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "%s | Insightful", default: "Insightful" },
  description:
    "A comprehensive finance dashboard designed to provide organizations with a clear overview of their financial performance and health. The application includes key performance indicators (KPIs) such as revenue, expenses, cash flow, and profitability. It is specifically crafted for purposes like budgeting, forecasting, and decision-making.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
