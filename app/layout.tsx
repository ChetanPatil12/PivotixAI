import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pivotix AI — AI Automation for Growing Businesses",
  description:
    "We set up AI systems that respond to your leads, answer your phones, follow up with customers, and handle your team's back-and-forth — all automatically. You get more done. You hire less. You earn more.",
  keywords: [
    "AI automation",
    "business automation",
    "AI receptionist",
    "lead response",
    "small business AI",
  ],
  openGraph: {
    title: "Pivotix AI — Run more of your business without more staff",
    description:
      "AI systems for business owners who want to grow without hiring more people.",
    url: "https://pivotixai.com",
    siteName: "Pivotix AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pivotix AI",
    description: "AI automation for growing businesses.",
  },
  metadataBase: new URL("https://pivotixai.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
