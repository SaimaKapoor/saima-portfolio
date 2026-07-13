import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Saima Kapoor — AI/ML Student & Builder",
  description:
    "Saima Kapoor is a 2nd-year B.Tech Computer Science student focused on AI/ML, building intelligent products and researching real-world machine learning applications.",
  keywords: [
    "Saima Kapoor",
    "AI/ML portfolio",
    "Machine Learning student",
    "B.Tech Computer Science",
    "AI researcher",
  ],
  openGraph: {
    title: "Saima Kapoor — AI/ML Student & Builder",
    description: "AI/ML Student • Building Intelligent Solutions • Future Founder",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${jakarta.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
