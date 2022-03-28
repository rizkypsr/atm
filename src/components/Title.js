import { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"

export const Title = ({ className, name }) => {
  const { t } = useContext(LocaleContext)

  return (
    <h1 className={`${className ?? "text-2xl md:text-3xl"} font-semibold text-center text-white whitespace-pre-line `}>
      {t(name)}
    </h1>
  )
}
