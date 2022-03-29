import React, { useEffect } from "react"
import Lottie from "lottie-react"
import receiptAnimation from "../lottie/25237-receipt.json"
import { Title } from "../components/Title"
import { useNavigate } from "react-router-dom"

export const PrintReceipt = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/take-card")
    }, 4000)
  }, [navigate])
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="printReceipt" />
      <Lottie animationData={receiptAnimation} loop={true} className="w-1/2 md:w-1/4" />
    </div>
  )
}
