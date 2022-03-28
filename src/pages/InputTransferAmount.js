import { t } from "i18next"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert } from "../components/Alert"
import { Card } from "../components/Card"
import { TextInput } from "../components/TextInput"
import { Title } from "../components/Title"
import { AccountContext } from "../context/AccountContext"
import { LocaleContext } from "../context/LocaleContext"

export const InputTransferAmount = () => {
  const [amount, setAmount] = useState(0)
  const [failBalance, setFailBalance] = useState(false)
  const [failLimit, setFailLimit] = useState(false)

  const balance = process.env.REACT_APP_BALANCE
  const limit = process.env.REACT_APP_LIMIT
  const navigate = useNavigate()
  const { t } = useContext(LocaleContext)
  const { setAccount } = useContext(AccountContext)

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!checkBalance) {
        setFailLimit(false)
        setFailBalance(true)
        return
      }

      if (!checkLimit) {
        setFailBalance(false)
        setFailLimit(true)
        return
      }

      setAccount((acc) => ({
        ...acc,
        amount,
      }))

      navigate("/success-transfers")
    }
  }

  const checkBalance = parseInt(amount) <= parseInt(balance)

  const checkLimit = parseInt(amount) <= parseInt(limit)

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="inputTransferAmount" />

      {failBalance && <Alert title={t("insufficientFunds")} />}
      {failLimit && <Alert title={t("exceedingLimit")} />}

      <Card>
        <TextInput
          className="w-full"
          onKeyDown={handleKeyDown}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Card>

      <Title name="pressEnter" />
    </div>
  )
}
