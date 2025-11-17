import type { Metadata } from "next";
import "@/app/globals.css";
import { SparklesCore } from "@/components/ui/shadcn-io/sparkles";

import SplashScreen from "@/components/ui/SplashScreen";

export const metadata: Metadata = {
  title: "Birthday Sayang Celebration",
  description:
    "A day of elegance, intimacy, and unforgettable moments — crafted just for you, sayang.",

  openGraph: {
    title: "Birthday Sayang Celebration",
    description:
      "A day of elegance, intimacy, and unforgettable moments — crafted just for you, sayang.",
    url: "https://e-invitation-v1.vercel.app/",
    siteName: "Birthday Sayang Celebration",
    images: [
      {
        url: "https://e-invitation-v1.vercel.app/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Birthday Sayang Celebration",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Birthday Sayang Celebration",
    description:
      "A day of elegance, intimacy, and unforgettable moments — crafted just for you, sayang.",
    images: ["https://e-invitation-v1.vercel.app/banner.jpg"],
  },

  metadataBase: new URL("https://e-invitation-v1.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="relative sm:h-screen sm:overflow-hidden overflow-x-hidden overflow-y-auto min-h-screen max-w-full antialiased bg-[linear-gradient(to_bottom_right,#242615,#2E2D19,#342814,#3A2312,#1F1812,#2B2623)]"
      >
        <SplashScreen />
        <div className="absolute inset-0 -z-10">
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={10}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={1}
          />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
