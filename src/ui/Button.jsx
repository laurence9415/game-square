import React from "react"

const Button = ({ className, children }) => {
   return (
      <button
         className={`flex pt-[14px] pb-[12px] px-4 rounded-xl ${className}`}
      >
         {children}
      </button>
   )
}

export default Button
