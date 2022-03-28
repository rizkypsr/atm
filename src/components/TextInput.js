import React from "react"

export const TextInput = ({ onKeyDown, onChange, className }) => {
  return (
    <>
      <input
        type="text"
        onChange={onChange}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ${className}`}
        onKeyDown={onKeyDown}
      ></input>
    </>
  )
}
