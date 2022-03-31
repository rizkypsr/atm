import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Outlet } from "react-router-dom"
import { AccountContext } from "./context/AccountContext"
import { LocaleContext } from "./context/LocaleContext"
import { WithdrawalContext } from "./context/WithdrawalContext"

const App = () => {
  const { i18n } = useTranslation()
  const [account, setAccount] = useState({
    accountNumber: "",
    name: "Jasica Silmy Ramadhan",
    amount: 0,
  })
  const value = useMemo(() => ({ account, setAccount }), [account])

  const [withdrawal, setWithdrawal] = useState({
    witdrawalAmount: 0
  })

  const withdrawalValue = useMemo(
    () => ({ withdrawal, setWithdrawal }),
    [withdrawal]
  )

  return (
    <>
      <LocaleContext.Provider value={i18n}>
        <AccountContext.Provider value={value}>
          <WithdrawalContext.Provider value={withdrawalValue}>
            <Outlet />
          </WithdrawalContext.Provider>
        </AccountContext.Provider>
      </LocaleContext.Provider>
    </>
  )
}

export default App
