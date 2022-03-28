import React from "react"

export const Card = (props) => {
  return (
    <div className="block w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      {props.children}
    </div>
  )
}
