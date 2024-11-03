import React from "react"
import logo from "../image/logo.png"
import textLogo from "../image/textlogo.png"

const Logo = ({ widthImage, heightImage, className, textHeight }) => {
   return (
      <div className={`flex gap-[10px] ${className}`}>
         <img
            src={logo}
            alt="logo"
            className={`${widthImage ? widthImage : "w-6"} ${
               heightImage ? heightImage : "h-6"
            }`}
         />
         <img
            src={textLogo}
            alt="textlogo"
            className={`w-auto ${
               textHeight ? textHeight : "h-[19px]"
            } self-center`}
         />
      </div>
   )
}

export default Logo
