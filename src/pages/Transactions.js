import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Title } from "../components/Title"

export const Transactions = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="chooseTransaction" />

      <div className="flex flex-col items-center w-1/2 space-y-4 md:flex-row md:space-y-0 md:justify-between md:w-max md:space-x-3">
        <div className="w-full">
          <Link to="/withdrawal">
            <Button title="withdraw" />
          </Link>
        </div>
        <div className="w-full">
          <Link to="/transfers">
            <Button title="transfers" />
          </Link>
        </div>
      </div>
    </div>
  )
}
