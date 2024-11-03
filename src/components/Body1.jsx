import React, { useState } from "react"
import Typography from "../ui/Typography"
import image47 from "../image/image 47.png"
import check from "../image/check-circle.png"
import Button from "../ui/Button"
import { MdOutlineEmail } from "react-icons/md"
import { FaArrowDown } from "react-icons/fa"

const ButtonList = [
   {
      id: 1,
      text: "Partner Enquiries",
   },
   {
      id: 2,
      text: "Events & Tournaments Enquiries",
   },
   {
      id: 3,
      text: "General Enquiries",
   },
]

const TextList = [
   {
      id: 1,
      text: "Host your gaming events at our state-of-the-art gaming venues.",
   },
   {
      id: 2,
      text: "Leverage our expertise in event management to create successful gaming experiences.",
   },
   {
      id: 3,
      text: "Gain access to our extensive network of gamers & influencers for event promotions.",
   },
   {
      id: 4,
      text: "Collaborate with us to produce & broadcast live gaming tournaments & competitions.",
   },
]

const Body1 = () => {
   const [activeButton, setActiveButton] = useState(
      "Events & Tournaments Enquiries"
   )
   // bg-[#0C0C13]
   return (
      <div className=" w-full bg-[#0C0C13] max-sm:px-4">
         <div className=" sm:py-16 pt-6 mb-4">
            <Typography
               text="you are interested in..."
               className="uppercase text-[60px] max-sm:pb-2 sm:text-center max-sm:text-[24px]"
            />
            <div className="flex justify-center gap-3 max-lg:flex-col">
               {ButtonList.map(({ id, text }) => (
                  <button
                     key={id}
                     className={`text-white text-grotesk sm:px-6 sm:py-3 text-[24px] ${
                        activeButton === text
                           ? "lg:bg-[#141414] lg:border-[1px] lg:border-[#404040]  lg:rounded-lg  shadow-custom"
                           : "shadow-2xl text-[#8E8E8E] "
                     } flex gap-2`}
                     onClick={() => setActiveButton(text)}
                  >
                     {activeButton === text && (
                        <div className="lg:hidden w-1 h-5 bg-[#087EFF] rounded-full self-center"></div>
                     )}
                     <p className="max-sm:h-5 max-sm:text-[16px]">{text}</p>
                  </button>
               ))}
            </div>
         </div>
         <div className="lg:w-[968px] mx-auto ">
            <Typography
               text="Plan exciting gaming events with Game Square and create memorable experiences for your audience."
               className="text-[48px] visible max-sm:hidden sm:text-center leading-[3.7rem] sm:px-8 px-3  "
            />
            <div className="flex max-lg:flex-col max-lg:max-w-[500px] justify-self-center sm:gap-10 gap-4 sm:py-12  py-0">
               <div className="relative w-full">
                  <Typography
                     text="Plan exciting gaming events with Game Square and create memorable experiences for your audience."
                     className=" leading-[28px] px-3 absolute text-[24px] visible sm:hidden bottom-0"
                  />
                  <img
                     src={image47}
                     className="max-lg:h-[264px] object-cover w-full max-lg:w-full"
                  />
               </div>

               <div>
                  <div className="flex flex-col gap-4">
                     <Typography
                        text="create the best gaming event to engage with you loyal customers"
                        className="sm:text-[30px] sm:leading-9 leading-6 text-[20px]"
                     />
                     <div className="flex flex-col sm:gap-6 gap-3">
                        {TextList.map(({ id, text }) => (
                           <div
                              className="flex sm:text-[18px] text-[#CCCCCC] gap-4 text-[14px]"
                              key={id}
                           >
                              <img
                                 src={check}
                                 alt="check"
                                 className="w-6 h-6 self-center"
                              />
                              <div>{text}</div>
                           </div>
                        ))}
                     </div>
                     <div className="max-sm:mt-2 max-sm:mb-6">
                        <Button className="bg-[#087EFF] max-sm:py-2 font-primary text-white text-[18px] gap-2  max-sm:px-6 px-8">
                           <MdOutlineEmail className="text-white self-center" />
                           ENQUIRE
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="text-white flex justify-between text-[10px] sm:text-[16px]">
               <FaArrowDown />
               <FaArrowDown />
               <p className="">SEE OUR CASE STUDIES</p>
               <FaArrowDown />
               <FaArrowDown />
            </div>
         </div>
      </div>
   )
}

export default Body1
