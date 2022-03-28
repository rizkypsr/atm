import { useTranslation } from "react-i18next"
import { Outlet } from "react-router-dom"
import { LocaleContext } from "./context/LocaleContext"

const App = () => {
  const { i18n } = useTranslation()

  return (
    <>
      <LocaleContext.Provider value={i18n}>
        <Outlet />
      </LocaleContext.Provider>
    </>
  )
}

export default App
