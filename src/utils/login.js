import { accounts } from "./accounts"

export const login = ({ accountNumber, pin }) => {
  const account = getAccountNumber(accountNumber)

  if (account.pin !== pin) {
      return null
  }

  return account
}

export const getAccountNumber = (accountNumber) => {
  const account = accounts.find((v) => v.accountNumber === accountNumber)
  return account
}
