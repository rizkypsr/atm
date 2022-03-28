import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Title } from "../components/Title"

export const Transactions = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="chooseTransaction" />

      <div className="flex space-x-3">
        <Link to="/withdrawal">
          <Button title="withdraw" />
        </Link>
        <Link to="/transfers">
          <Button title="transfers" />
        </Link>
      </div>
    </div>
  )
}
