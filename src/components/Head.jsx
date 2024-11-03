import React from "react"
import topNav from "../image/Top Nav.png"
import { LuMenu } from "react-icons/lu"
import Button from "../ui/Button"
import Typography from "../ui/Typography"
import Logo from "./Logo"

const Head = () => {
   return (
      <div className="w-full h-[519px] relative  background-header">
         <div className="z-10 absolute h-full w-full px-16 flex flex-col max-sm:px-4 justify-between">
            <div className="max-sm:px-4 py-6 flex justify-between">
               <Logo className="self-center" />
               <div className="flex gap-3">
                  <Button className="max-md:hidden text-white font-primary bg-[#087eff33] border-[1px] border-[#087eff]">
                     PLAN AN EVENT
                  </Button>
                  <Button className=" bg-white gap-[5px]">
                     <p className="font-primary self-center">MENU</p>
                     <LuMenu className="self-center" />
                  </Button>
               </div>
            </div>
            <div className="flex max-lg:flex-col ">
               <Typography
                  text="WORK WITH US "
                  className="lg:w-[50%] text-[60px] max-sm:text-[36px]"
               />
               <div className="text-white lg:w-[50%]">
                  Partner with Game Square and elevate your brand's presence in
                  the gaming community. Collaborate with us to create engaging
                  experiences and reach a diverse audience of gamers and
                  enthusiasts.
               </div>
            </div>
         </div>
         {/* <img
            className=" h-[519px] object-cover z-0 top-0 w-full"
            src={topNav}
            alt="topNav"
         /> */}
      </div>
   )
}

export default Head
