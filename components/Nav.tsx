import Link from "next/link"
import navlinks from "../data/navlinks"
import Stack from "@mui/material/Stack"

interface NavProps {
  type: "toggle" | "normal"
  onClick?: () => void
}

const Nav = ({ type, onClick }: NavProps) => {
  const defaultStyle =
    "dark:text-white dark:hover:text-green-500 text-center transition duration-250 hover:scale-125 hover:text-green-500 text-4xl"

  return (
    <>
      <nav>
        <Stack direction={"row"} spacing={4}>
          {navlinks.map((nav) => (
            <Link
              href={nav.link}
              key={nav.title}
              className={
                type === "normal"
                  ? defaultStyle
                  : defaultStyle + " text-lg py-4"
              }
              onClick={
                onClick
                  ? onClick
                  : () => {
                      return
                    }
              }
            >
              {nav.title}
            </Link>
          ))}
        </Stack>
      </nav>
    </>
  )
}

export default Nav
