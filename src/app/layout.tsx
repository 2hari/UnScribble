import Header from "@/components/Header"
import "./globals.css"
import clsx from "clsx"
import Footer from "@/components/Footer"

export const metadata = {
  title: "UnScribble | AI",
  description: "Convert your Scribble to AI art",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx("flex flex-col min-h-screen bg-slate-100")}>
        <Header />
        {children}
        <div className="flex-grow" />
        <Footer />
      </body>
    </html>
  )
}
