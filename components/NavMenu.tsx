"use client"

import Link from "next/link"
import { useState } from "react"
import Nav from "./Nav"
import ThemeIcon from "./ThemeIcon"

type Theme = "light" | "dark"

const NavMenu = () => {
  /*************************************************************************************************
   * 테마
   *************************************************************************************************/
  const [theme, setTheme] = useState<Theme>("light")
  const handleTheme = () => {
    const toggledTheme = theme === "dark" ? "light" : "dark"
    setTheme(toggledTheme)
    // 사용자 로컬 스토리지에 저장하고 테마 변경시마다 body의 class를 바꿔준다.
    window.localStorage.setItem("theme", toggledTheme)
    document.body.className = toggledTheme
  }

  return (
    <>
      <header className="flex ">
        {/* 로고 */}
        <Link href={"/"}>
          {theme === "light" ? (
            <div className="p-2">
              <span className="font-english text-2xl">Aristata</span>
            </div>
          ) : (
            <div className="p-2">
              <span className="font-english text-2xl">Aristata</span>
            </div>
          )}
        </Link>
        {/* 네비 메뉴 */}
        <Nav type="normal" theme={theme} />
        {/* 테마 */}
        <button onClick={handleTheme}>
          <ThemeIcon theme={theme} />
        </button>
      </header>
    </>
  )
}

export default NavMenu
