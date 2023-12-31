"use client"

import { useTheme } from "next-themes"
import Link from "next/link"
import ThemeIcon from "./ThemeIcon"
import HomeSVG from "./svgs/Home"
import IdentificationSVG from "./svgs/Identification"
import InboxesSVG from "./svgs/Inboxes"

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
    <>
      <header className="mx-auto max-w-3xl flex justify-center items-center gap-10 transition duration-500 bg-white text-neutral-800 dark:bg-[#111111] dark:text-neutral-100">
        {/* 로고 */}
        <Link href={"/"}>
          <div className="p-4">
            <HomeSVG />
          </div>
        </Link>
        {/* 네비 메뉴 */}
        <Link href={"/profile"}>
          <div className="p-4">
            <IdentificationSVG />
          </div>
        </Link>
        <Link href={"/posts"}>
          <div className="p-4">
            <InboxesSVG />
          </div>
        </Link>

        {/* 테마 */}
        <button onClick={handleTheme}>
          <ThemeIcon theme={theme} />
        </button>
      </header>
    </>
  )
}

export default NavBar
