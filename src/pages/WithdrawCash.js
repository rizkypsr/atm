import React, { useContext, useState } from "react"
import { Title } from "../components/Title"
import { Card } from "../components/Card"
import { TextInput } from "../components/TextInput"
import { Alert } from "../components/Alert"
import { useNavigate } from "react-router-dom"
import { LocaleContext } from "../context/LocaleContext"

export const WithdrawCash = () => {
  const [amount, setAmount] = useState(0)
  const [failBalance, setFailBalance] = useState(false)
  const [failLimit, setFailLimit] = useState(false)
  const [failMinimial, setFailMinimal] = useState(false)

  const balance = process.env.REACT_APP_BALANCE
  const limit = process.env.REACT_APP_LIMIT
  const min = process.env.REACT_APP_MIN

  const navigate = useNavigate()
  const { t } = useContext(LocaleContext)
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!checkBalance) {
        setFailLimit(false)
        setFailMinimal(false)
        setFailBalance(true)
        return
      }

      if (!checkLimit) {
        setFailBalance(false)
        setFailMinimal(false)
        setFailLimit(true)
        return
      }

      if (!checkMininmal) {
        setFailBalance(false)
        setFailLimit(false)
        setFailMinimal(true)
        return
      }

      navigate("/take-money")
    }
  }

  const checkBalance = parseInt(amount) <= parseInt(balance)

  const checkLimit = parseInt(amount) <= parseInt(limit)

  const checkMininmal = parseInt(amount) >= parseInt(min)

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="inputWithdrawAmount" />

      {failBalance && <Alert title={t("insufficientFunds")} />}
      {failLimit && <Alert title={t("exceedingLimit")} />}
      {failMinimial && <Alert title={t("minimumTransactions")} />}

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
