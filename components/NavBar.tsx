"use client"

import Link from "next/link"
import ThemeIcon from "./ThemeIcon"
import HomeSVG from "./svgs/Home"
import IdentificationSVG from "./svgs/Identification"
import InboxesSVG from "./svgs/Inboxes"
import { useEffect, useState } from "react"

const NavBar = () => {
  /*************************************************************************************************
   * 테마
   *************************************************************************************************/
  const [theme, setTheme] = useState("light")
  const setDarkTheme = () => {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    setTheme("dark")
  }
  const setLightTheme = () => {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
    setTheme("light")
  }
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkTheme()
    } else {
      setLightTheme()
    }
  }, [])
  const handleTheme = () => {
    console.log("theme change function called")
    if (theme === "dark") {
      setLightTheme()
    } else {
      setDarkTheme()
    }
  }

  return (
    <>
      <header className="sticky top-0 mx-auto max-w-3xl flex justify-center items-center gap-10 transition duration-500 bg-white text-neutral-800 dark:bg-[#111111] dark:text-neutral-100">
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
