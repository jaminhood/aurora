import Header from "@/components/header"
import type { ChildrenTypes } from "@/types"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
 title: "The Aurora Project",
 description: "A Delivery Network",
}

export default function RootLayout({ children }: ChildrenTypes) {
 return (
  <html lang="en">
   <body className={inter.className}>
    <Header />
    {children}
   </body>
  </html>
 )
}
