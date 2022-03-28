import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Title } from "../components/Title"

export const TakeCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="takeCard" />
      <Link to="/">
        <Button title="takeCardBtn" />
      </Link>
    </div>
  )
}
