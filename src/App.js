import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Outlet } from "react-router-dom"
import { AccountContext } from "./context/AccountContext"
import { LocaleContext } from "./context/LocaleContext"

const App = () => {
  const { i18n } = useTranslation()
  const [account, setAccount] = useState({
    accountNumber: "",
    name: "Jasica Silmy Ramadhan",
    amount: 0
  })
  const value = useMemo(() => ({ account, setAccount }), [account])

  return (
    <>
      <LocaleContext.Provider value={i18n}>
        <AccountContext.Provider value={value}>
          <Outlet />
        </AccountContext.Provider>
      </LocaleContext.Provider>
    </>
  )
}

export default App
