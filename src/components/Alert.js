import React from "react"

export const Alert = ({ title }) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-md"
      role="alert"
    >
      <span className="font-medium">{title}</span>
    </div>
  )
}
