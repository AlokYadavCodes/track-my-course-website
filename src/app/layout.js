import { Work_Sans, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Track My Course",
  description:
    "Turn YouTube playlists into structured, trackable learning courses.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "TrackMyCourse",
    description:
      "Turn YouTube playlists into structured, trackable learning courses.",
    url: "https://www.trackmycourse.online",
    siteName: "TrackMyCourse",
    images: [
      {
        url: "https://www.trackmycourse.online/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackMyCourse",
    description:
      "Turn YouTube playlists into structured, trackable learning courses.",
    site: "@alokcodes",
    creator: "@alokcodes",
    images: [
      {
        url: "https://www.trackmycourse.online/og.png",
        alt: "TrackMyCourse logo",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${workSans.variable} ${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
