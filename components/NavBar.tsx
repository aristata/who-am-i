"use client"

import { useTheme } from "next-themes"
import Link from "next/link"
import NavLinks from "./NavLinks"
import ThemeIcon from "./ThemeIcon"

const NavBar = () => {
  /*************************************************************************************************
   * 테마
   *************************************************************************************************/
  const { theme, setTheme } = useTheme()
  const handleTheme = () => {
    const toggledTheme = theme === "dark" ? "light" : "dark"
    setTheme(toggledTheme)
  }

  return (
    <header className="flex justify-center items-baseline gap-10">
      {/* 로고 */}
      <Link href={"/"}>
        {theme === "light" ? (
          <div className="p-2">
            <span className="font-english text-4xl">Aristata</span>
          </div>
        ) : (
          <div className="p-2">
            <span className="font-english text-4xl">Aristata</span>
          </div>
        )}
      </Link>
      {/* 네비 메뉴 */}
      <NavLinks type="normal" theme={theme} />
      {/* 테마 */}
      <button onClick={handleTheme}>
        <ThemeIcon theme={theme} />
      </button>
    </header>
  )
}

export default NavBar
