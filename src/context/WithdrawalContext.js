import React from "react"

export const WithdrawalContext = React.createContext({
  withdrawal: 0,
  setWithdrawal: () => {},
})
