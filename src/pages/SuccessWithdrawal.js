import { t } from "i18next"
import React, { useContext, useEffect } from "react"
import CurrencyFormat from "react-currency-format"
import { useNavigate } from "react-router-dom"
import { Title } from "../components/Title"
import { WithdrawalContext } from "../context/WithdrawalContext"

export const SuccessWithdrawal = () => {
  const navigate = useNavigate()
  const { withdrawal } = useContext(WithdrawalContext)

  useEffect(() => {
    setTimeout(() => {
      navigate("/receipt")
    }, 4000)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Title name="successTransaction" />
      <hr className="w-1/2 max-w-md my-3 border-2 border-dashed md:w-full" />

      <CurrencyFormat
        value={withdrawal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rp."}
        renderText={(value) => (
          <Title
            className="text-base"
            name={t("detailWithdrawal", { amount: value })}
          />
        )}
      />
    </div>
  )
}
