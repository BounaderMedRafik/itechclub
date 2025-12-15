import Navigation from "@/components/core/layout/Navigation";
import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://itechclub.vercel.app"),

  title: {
    default: "I-Tech Scientific Club | Technology & Innovation in El Tarf",
    template: "%s | I-Tech Scientific Club",
  },

  description:
    "I-Tech Scientific Club is a student-led technology and innovation club based in El Tarf, Algeria. We explore coding, robotics, AI, cybersecurity, web development, and data science through workshops, events, and hands-on projects.",

  keywords: [
    // Brand & Identity
    "I-Tech Scientific Club",
    "I-Tech Club",
    "I-Tech UCBET",
    "I-Tech El Tarf",
    "I-Tech University Club",
    "I-Tech Tech Community",

    // University & Location
    "Chadli Ben Djedid University",
    "University of Chadli Ben Djedid",
    "UCBET",
    "El Tarf University",
    "El Tarf Algeria",
    "University Clubs El Tarf",
    "Student Clubs El Tarf",

    // Authority & Positioning
    "Best IT Club in El Tarf",
    "Number One IT Club UCBET",
    "Top Tech Club Algeria",
    "Leading Student Tech Club",
    "Innovation Club Algeria",
    "Technology Leaders El Tarf",

    // Technology Domains
    "Information Technology Club",
    "Computer Science Club",
    "Coding Club",
    "Programming Club Algeria",
    "Web Development Club",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Software Engineering Students",

    // Advanced Tech Fields
    "Artificial Intelligence Club",
    "Machine Learning Students",
    "Data Science Club",
    "Cybersecurity Club",
    "Ethical Hacking Club",
    "Robotics Club",
    "IoT Club",
    "Cloud Computing Students",

    // Activities & Events
    "Tech Workshops Algeria",
    "University Tech Workshops",
    "Hackathons Algeria",
    "Programming Competitions",
    "National Tech Competitions",
    "Student Innovation Events",
    "Tech Conferences University",
    "IT Training Sessions",
    "Hands-on Tech Projects",

    // Community & Impact
    "Student Tech Community",
    "Tech Education Algeria",
    "Digital Skills Development",
    "Youth Innovation Algeria",
    "Technology Awareness",
    "Open Source Community",
    "Startup Culture Students",

    // Social & Online Presence
    "I-Tech Instagram",
    "I-Tech Facebook",
    "itech_ucbet",
    "i.tech.el.tarf",
  ],

  authors: [
    {
      name: "Mohamed Rafik",
      url: "https://bmed.vercel.app",
    },
  ],

  creator: "I-Tech Scientific Club",
  publisher: "I-Tech Scientific Club",

  icons: {
    icon: "/itechfavicon.svg",
    shortcut: "/itechfavicon.svg",
    apple: "/itechfavicon.svg",
  },

  openGraph: {
    title: "I-Tech Scientific Club | Tech, Innovation & Creativity",
    description:
      "A community of passionate students driving innovation in El Tarf. Join I-Tech for workshops, hackathons, and projects in AI, robotics, cybersecurity, and web development.",
    url: "https://itechclub.vercel.app",
    siteName: "I-Tech Scientific Club",
    images: [
      {
        url: "/chabiba.png",
        width: 1200,
        height: 630,
        alt: "I-Tech Scientific Club – Technology & Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "I-Tech Scientific Club | El Tarf",
    description:
      "Empowering students through technology, innovation, and hands-on learning.",
    images: ["/chabiba.png"],
    creator: "@itech_club", // optional
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
