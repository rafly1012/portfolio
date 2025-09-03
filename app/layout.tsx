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
  description: "Portfolio",
  keywords: ["Rafly Yusuf", "Full-Stack Developer", "Portfolio"],
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
              url: "https://raflyyusuf.com",
              jobTitle: "Web Developer",
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
