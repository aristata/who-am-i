import Link from "next/link"
import navlinks from "../data/navlinks"

interface NavProps {
  type: "toggle" | "normal"
  onClick?: () => void
  theme?: string
}

const NavLinks = ({ type, onClick, theme }: NavProps) => {
  const defaultStyle =
    "dark:text-white dark:hover:text-green-500 text-center transition duration-250 hover:scale-125 hover:text-green-500 text-2xl"

  return (
    <>
      <nav className="flex flex-row gap-4">
        {navlinks.map((nav) => (
          <Link
            href={nav.link}
            key={nav.title}
            className={
              type === "normal" ? defaultStyle : defaultStyle + " text-lg py-4"
            }
            onClick={
              onClick
                ? onClick
                : () => {
                    return
                  }
            }
          >
            <span className="font-english">{nav.title}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}

export default NavLinks
