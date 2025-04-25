import Navigation from "@/components/core/layout/Navigation";
import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";

export const metadata: Metadata = {
  title: "I-Tech Scientific Club | El Taref",
  description:
    "I-Tech Scientific Club is a vibrant hub of tech innovation based in El Taref. We dive into coding, robotics, AI, cybersecurity, and more — building the future one project at a time.",
  keywords: [
    "I-Tech",
    "I-Tech Scientific Club",
    "El Taref",
    "Tech Club Algeria",
    "Coding Club",
    "Robotics",
    "Cybersecurity",
    "Artificial Intelligence",
    "Web Development",
    "Data Science",
    "Hackathons",
    "Workshops",
  ],
  icons: {
    icon: "/itechfavicon.svg",
  },

  authors: [{ name: "Mohamed Rafik", url: "https://bmed.vercel.app" }],
  creator: "Mohamed Rafik",
  metadataBase: new URL("https://itechclub.vercel.app"),
  openGraph: {
    title: "I-Tech Scientific Club | El Taref",
    description:
      "A collective of passionate tech minds in El Taref. Explore our workshops, hackathons, and projects in AI, robotics, web development, and more.",
    url: "https://itechclub.vercel.app",
    siteName: "I-Tech Scientific Club",
    images: [
      {
        url: "/chabiba.png", // Add a relevant OG image in your public folder
        width: 1200,
        height: 630,
        alt: "I-Tech Scientific Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I-Tech Scientific Club | El Taref",
    description:
      "Dive into the world of tech with I-Tech: robotics, AI, coding, and beyond.",
    images: ["/chabiba.png"],
    creator: "@itech_club", // optional, update if you have a Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` font-sf`}>
        <LenisProvider>
          {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          <Navigation />
          <div className=" pt-24">{children}</div>
          {/* </ThemeProvider> */}
        </LenisProvider>
      </body>
    </html>
  );
}
