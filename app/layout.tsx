import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "next-themes";
// import { HighlightInit } from "@highlight-run/next/client";
// import TrackUserDevice from "@/components/trackUserDevice/index";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: "Dr Anuradha Pradhan",
  description:
    "Dr. Anuradha Pradhan is a leading ophthalmologist and oculoplasty surgeon in Bhubaneswar. Specializing in cataract surgery, oculoplasty, and DCR. Book your consultation today!",
  openGraph: {
    title: "Dr. Anuradha Pradhan - Best Eye Care Specialist in Bhubaneswar",
    description:
      "Experienced in Cataract Surgery, Oculoplasty, DCR & more. Contact Dr. Pradhan for personalized eye care solutions.",
    url: "https://www.anuradhapradhan.com/",
    siteName: "Dr. Anuradha Pradhan Eye Care",
    images: [
      {
        url: "https://res.cloudinary.com/pr4dhan/image/upload/v1741926104/port_ttvnzz.jpg",
        width: 818,
        height: 801,
        type: "image/webp",
      },
      {
        url: "https://media.licdn.com/dms/image/v2/D5603AQEJKr3Dcic5_g/profile-displayphoto-shrink_400_400/B56ZSRoBysHwAg-/0/1737609978151",
      },
    ],
    type: "website",
  },
  verification: {
    google: "uGbcpV_KcrlPOse0kbEan7nNsM_oW4pp1R3Ej9lE5y4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <HighlightInit
        projectId={"ldwy0ylg"}
        serviceName="my-nextjs-frontend"
        tracingOrigins
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        }}
      /> */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:14px_25px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] dark:bg-[size:14px_25px]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
          {/* <TrackUserDevice /> */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
