import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafly Yusuf | Full-Stack Developer Portfolio",
  description:
    "Rafly Yusuf is a Full-Stack Developer with 3+ years of experience building clean, user-friendly digital solutions. Passionate about continuous learning and innovation, he delivers work that makes a positive impact.",
  keywords: ["Rafly Yusuf", "Full-Stack Developer"],
  authors: [{ name: "Rafly Yusuf" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rafly Yusuf",
              url: "https://rafly-yusuf.vercel.app",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://www.linkedin.com/in/rafly-yusuf-42b409177",
                "https://github.com/rafly1012",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
