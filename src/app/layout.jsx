import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import clsx from "clsx";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: ["./favicon.ico"],
    apple: ["./favicon.ico"],
  },
  description: `I am a frontend freelance developer and an advocate for building responsive, accessible, and inclusive digital products and experiences for the web. Excellent problem-solving abilities and expertise in optimizing web performance. Strong communication skills and the ability to collaborate effectively with cross-functional teams. Committed to staying updated with the latest industry trends and technologies to deliver cutting-edge solutions.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-emerald-950 text-slate-100">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/* <link rel="icon" href="./mtlogo.png" type="image/png" sizes="32x32" /> */}
        {/* <link rel="icon" type="image/x-icon" href="./favicon.ico"></link> */}
      </head>
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
        <Navbar />
        {children}
        <Footer />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
      </body>
    </html>
  );
}
