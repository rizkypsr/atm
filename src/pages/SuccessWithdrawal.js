import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Title } from "../components/Title"

export const SuccessWithdrawal = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/receipt")
    }, 1500)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Title name="successTransaction" />
    </div>
  )
}
