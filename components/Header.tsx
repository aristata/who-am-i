"use client"

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { grey } from "@mui/material/colors"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import Nav from "./Nav"
import IconButton from "@mui/material/IconButton"
import ThemeIcon from "./ThemeIcon"

type Theme = "light" | "dark"

const Header = () => {
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
      <Head>
        <title>Aristata's Blog</title>
      </Head>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        {/* 로고 */}
        <Link href={"/"}>
          {theme === "light" ? (
            <Box
              sx={{
                textAlign: "center",
                padding: 2,
                border: "1px solid red"
              }}
            >
              <Typography fontFamily={"IAMAPLAYER"} variant="h2">
                Aristata
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                textAlign: "center",
                padding: 2,
                border: "1px solid red"
              }}
            >
              <Typography
                fontFamily={"IAMAPLAYER"}
                variant="h2"
                color={grey[100]}
              >
                Aristata
              </Typography>
            </Box>
          )}
        </Link>
        {/* 네비 메뉴 */}
        <Nav type="normal" />
        {/* 테마 */}
        <IconButton>
          <ThemeIcon theme={theme} />
        </IconButton>
      </Stack>
    </>
  )
}

export default Header
