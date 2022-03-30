import React, { useContext, useState } from "react"
import { Title } from "../components/Title"
import { Card } from "../components/Card"
import { TextInput } from "../components/TextInput"
import { AccountContext } from "../context/AccountContext"
import { useNavigate } from "react-router-dom"
import { Alert } from "../components/Alert"
import { LocaleContext } from "../context/LocaleContext"

export const Transfers = () => {
  const navigate = useNavigate()
  const { setAccount } = useContext(AccountContext)
  const { t } = useContext(LocaleContext)
  const [accountNumber, setAccountNumber] = useState("")
  const [bankCode, setBankCode] = useState("")
  const [validationErr, setValidationErr] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (checkInput) {
        setAccount((acc) => ({
          ...acc,
          accountNumber,
        }))

        navigate("/transfers-amount")
      } else {
        setValidationErr(true)
      }
    }
  }

  const checkInput = bankCode !== '' && accountNumber != ''

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 space-y-8">
      <Title name="inputTransferDestination" />

      {validationErr && <Alert title={t("emptyInput")} />}

      <Card>
        <div className="flex items-center space-x-3">
          <TextInput
            className="w-20"
            onKeyDown={handleKeyDown}
            onChange={(e) => setBankCode(e.target.value)}
          />
          <span>+</span>
          <TextInput
            className="w-full"
            onKeyDown={handleKeyDown}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
      </Card>

      <Title name="pressEnter" />
    </div>
  )
}
