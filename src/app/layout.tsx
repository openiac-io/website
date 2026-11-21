import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenIaC — On-Premise & Air-Gapped Platform Framework",
  description:
    "Provision Kubernetes (K8s, K3s, OpenShift), KubeVirt VM Virtualization, and OpenStack Private Cloud on RHEL/Rocky Linux—online or air-gapped—with a single command.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand-500/30 selection:text-brand-200">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
