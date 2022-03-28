import { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"

export const Title = ({ name }) => {
  const { t } = useContext(LocaleContext)

  return (
    <h1 className="text-2xl font-semibold text-center text-white whitespace-pre-line md:text-3xl">
      {t(name)}
    </h1>
  )
}
