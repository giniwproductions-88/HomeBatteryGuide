import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://homebatteryguide.vercel.app"),
  title: {
    default: "Home Battery Guide",
    template: "%s | Home Battery Guide",
  },
  description:
    "Independent guide to residential battery storage. Clear, neutral analysis to help homeowners decide whether batteries make sense in the post–federal tax credit era.",
  openGraph: {
    title: "Home Battery Guide",
    description:
      "Independent guide to residential battery storage. Clear, neutral analysis for the post–federal tax credit era.",
    url: "https://homebatteryguide.vercel.app",
    siteName: "Home Battery Guide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Battery Guide",
    description:
      "Independent guide to residential battery storage in the post–federal tax credit era.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
