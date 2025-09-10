import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Anirban Das",
  description:
    "Just a student who fell in love with the endless possibilities of Android development. Building mobile experiences with Kotlin, Flutter, and modern technologies.",
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
    apple: "/placeholder-logo.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
