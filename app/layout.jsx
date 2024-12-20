import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"


const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
})

export const metadata = {
  title: "Sayef",
  description: "I am sayef a front-end react developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen selection:bg-accent selection:text-white overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-accent scrollbar-thumb-rounded scrollbar-track-transparent scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} antialiased bg-primary text-slate`}
      >
        <Header />
        {children}
        <footer className="pb-1 text-center text-xs pointer-events-none select-none pt-10 lg:pt-16 xl:pt-20">~ABDULLAH AL SAYEF~</footer>
        
        
      </body>
    </html>
  );
}
