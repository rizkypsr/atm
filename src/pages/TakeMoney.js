import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react"
import receiptAnimation from "../lottie/11843-chash-out.json"
import { Title } from "../components/Title"

export const TakeMoney = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/success-transaction")
    }, 5000)
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="takeMoney" />
      <Lottie animationData={receiptAnimation} loop={true} className="w-1/2 md:w-1/4" />
    </div>
  )
}
