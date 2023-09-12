"use client"

import "../data/metadata"
import "./globals.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Container from "components/Container"
import CustomThemeProvider from "@/components/CustomThemeProvider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <NavBar />
          <Container>{children}</Container>
        </CustomThemeProvider>
      </body>

      <Footer />
    </html>
  )
}
