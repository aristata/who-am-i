import MoonSVG from "./svgs/Moon"
import SunSVG from "./svgs/Sun"

interface ThemeIconProps {
  theme: "light" | "dark"
}

const ThemeIcon = ({ theme }: ThemeIconProps) => {
  if (theme === "light") {
    return <SunSVG />
  }

  return <MoonSVG />
}

export default ThemeIcon
