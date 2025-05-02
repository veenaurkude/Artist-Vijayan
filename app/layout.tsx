import type React from "react"
import { Inter, Playfair_Display, Roboto, Cormorant } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import WhatsAppBtn from "@/components/whatsappbtn"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const roboto = Roboto({
  subsets: ["latin"],
  // weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata = {
  title: "Artist Portfolio",
  description: "A portfolio website for a sketch/painter artist",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${roboto.variable} ${cormorant.variable}`}>
      <body>
        <CustomCursor />
        <WhatsAppBtn />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
