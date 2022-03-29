import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Title } from "../components/Title"
import { AccountContext } from "../context/AccountContext"

export const SuccessTransfers = () => {
  const navigate = useNavigate()
  const { account } = useContext(AccountContext)
  const CurrencyFormat = require("react-currency-format")

  useEffect(() => {
    setTimeout(() => {
      navigate("/receipt")
    }, 4000)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Title name="successTransaction" />

      <hr className="w-1/2 max-w-md my-3 border-2 border-dashed md:w-full" />

      <Title
        className="text-base"
        name={`No Rek Tujuan: ${account.accountNumber}`}
      />
      <Title className="text-base" name={`Nama: ${account.name}`} />
      <CurrencyFormat
        value={account.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rp."}
        renderText={(value) => <Title className="text-base" name={`Jumlah Transfer: ${value}`} />}
      />
    </div>
  )
}
