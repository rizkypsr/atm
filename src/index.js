import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Languages } from "./pages/Languages"
import { Home } from "./pages/Home"
import { InputPin } from "./pages/InputPin"
import "./i18n/config"
import "flowbite"
import { Transactions } from "./pages/Transactions"
import { Transfers } from "./pages/Transfers"
import { InputTransferAmount } from "./pages/InputTransferAmount"
import { SuccessTransaction } from "./pages/SuccessTransaction"
import { PrintReceipt } from "./pages/PrintReceipt"
import { TakeCard } from "./pages/TakeCard"
import { WithdrawCash } from "./pages/WithdrawCash"
import { TakeMoney } from "./pages/TakeMoney"
import { SuccessTransfers } from "./pages/SuccessTransfers"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}>
          <Route index element={<Home />} />
          <Route path="languages" element={<Languages />} />
          <Route path="pin" element={<InputPin />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="transfers" element={<Transfers />} />
          <Route path="transfers-amount" element={<InputTransferAmount />} />
          <Route path="success-transaction" element={<SuccessTransaction />} />
          <Route path="success-transfers" element={<SuccessTransfers />} />
          <Route path="receipt" element={<PrintReceipt />} />
          <Route path="take-card" element={<TakeCard />} />
          <Route path="withdrawal" element={<WithdrawCash />} />
          <Route path="take-money" element={<TakeMoney />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)