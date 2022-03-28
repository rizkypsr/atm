import React, { useContext, useState } from "react"
import { Title } from "../components/Title"
import { Card } from "../components/Card"
import { TextInput } from "../components/TextInput"
import { AccountContext } from "../context/AccountContext"
import { useNavigate } from "react-router-dom"

export const Transfers = () => {
  const navigate = useNavigate()

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/transfers-amount")
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="inputTransferDestination" />

      <Card>
        <div className="flex items-center space-x-3">
          <TextInput className="w-20" onKeyDown={handleKeyDown} />
          <span>+</span>
          <TextInput className="w-full" onKeyDown={handleKeyDown} />
        </div>
      </Card>

      <Title name="pressEnter" />
    </div>
  )
}
