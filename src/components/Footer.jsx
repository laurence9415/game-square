import React from "react"
import Typography from "../ui/Typography"
import Logo from "./Logo"
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6"

const Footer = () => {
   return (
      <div className="pt-[2px] border-gradient">
         <div className="bg-[#0C0C13] flex flex-col px-4 lg:px-32 py-12 md:pt-16 sm:pb-24 relative overflow-hidden bg">
            <div className="flex justify-between mb-0 sm:mb-12 z-10 max-lg:flex-col max-lg:gap-4">
               <div className="text-[#8E8E8E] text-[20px] text-grotesk flex gap-2 sm:gap-12 max-lg:order-2 max-lg:self-center max-sm:flex-col">
                  <button>contact us</button>
                  <button>cookie settings</button>
                  <button>partner with us</button>
                  <button>career</button>
               </div>
               <Typography
                  text="events@gamesquare.gg"
                  className="text-[24px] max-lg:order-1 max-lg:self-center"
               />
            </div>
            <div className="flex justify-between z-10 max-lg:px-8 max-sm:flex-col ">
               <Logo
                  className="max-sm:justify-center order-2 max-sm:mb-4"
                  widthImage="w-[32px]"
                  heightImage="h-[32px]"
                  textHeight="h-[25px]"
               />
               <div className="text-white flex gap-6 max-sm:justify-center order-1 max-sm:py-6">
                  <FaInstagram className="sm:text-[28px] text-[40px]" />
                  <FaXTwitter className="sm:text-[28px] text-[40px]" />
                  <FaTiktok className="sm:text-[28px] text-[40px]" />
               </div>
               <p className="text-[14px] text-[#8E8E8E] max-sm:text-center order-3">
                  2024 Games square, inc
               </p>
            </div>
            <div className="absolute flex -top-[321px] lg:left-[480px] z-0 ">
               <div className="w-[320px] h-[320px] bg-[#087EFF] rounded-full blur-[200px] "></div>
               <div className="w-[320px] h-[320px] bg-[#ED194C] rounded-full blur-[200px] -ml-[161px]"></div>
            </div>
         </div>
      </div>
   )
}

export default Footer
