import Footer from "../components/Footer"
import Header from "../components/Header"
import NavMenu from "../components/NavMenu"
import "./globals.css"

export const metadata = {
  title: "Aristata's Library",
  description: "Aristata's web application"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header />

      <body>
        <NavMenu />
        {children}
      </body>

      <Footer />
    </html>
  )
}
