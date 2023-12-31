"use client"

import "./globals.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Container from "components/Container"
import CustomThemeProvider from "@/components/CustomThemeProvider"
import Analytics from "@/components/Analytics"
import { Metadata } from "next"

const metadata: Metadata = {
  title: "Aristata's Blog",
  description: "일상, 기술, 포트폴리오 등을 게재할 블로그 입니다",
  authors: [{ name: "Aristata" }]
}

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
          <Analytics />
        </CustomThemeProvider>
      </body>

      <Footer />
    </html>
  )
}
