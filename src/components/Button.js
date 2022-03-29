import React, { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"

export const Button = ({ onClick, value, title }) => {
  const { t } = useContext(LocaleContext)

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        value={value}
        className="text-white w-full md:w-60 max-w-sm bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-500 font-medium rounded-sm text-sm px-5 py-2.5 focus:outline-none"
      >
        {t(title)}
      </button>
    </>
  )
}
