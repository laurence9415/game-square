import React from "react"
import Typography from "../ui/Typography"
import Background from "../image/Frame1705.png"
import image from "../image/Frame 1716.png"
import { useState, useEffect } from "react"

const Card = ({ card, selectedCard }) => {
   const [isLargeScreen, setIsLargeScreen] = useState(false)

   useEffect(() => {
      const updateScreenSize = () => {
         setIsLargeScreen(window.innerWidth >= 1024)
      }

      updateScreenSize()

      window.addEventListener("resize", updateScreenSize)

      return () => window.removeEventListener("resize", updateScreenSize)
   }, [])

   const cardStyle = {
      right:
         selectedCard === card.id
            ? "0px"
            : isLargeScreen
            ? `${(card.id - 1) * -100}px`
            : "",
      top:
         selectedCard === card.id
            ? "0px"
            : isLargeScreen
            ? `${(card.id - 1) * -36}px`
            : "",
      scale:
         selectedCard === card.id
            ? "1"
            : isLargeScreen
            ? `${1 - (card.id - 1) * 0.1}`
            : "1",
      zIndex: selectedCard === card.id ? "100" : `${10 - card.id}`,
   }

   return (
      <div
         style={cardStyle}
         className={`${
            selectedCard === card.id
               ? "relative z-50"
               : "lg:blur-[2px] lg:absolute lg:z-0 "
         } h-full mx-auto border-[1px] border-[#313131] rounded-2xl pb-11 background-custom-image `}
      >
         <div className="w-full absolute bg-gradient-to-t from-[#17171754] to-[#31313100]"></div>
         <div className="flex flex-col relative gap-4 md:px-8 px-6 pt-6 md:pt-11  rounded-2xl">
            <div className="flex justify-between max-md:flex-col">
               <Typography
                  text={card.title}
                  className="text-[48px] max-sm:text-[30px] leading-none"
               />

               <p className="text-custom-gradient font-bold text-[18px] max-sm:text-[16px]">
                  {card.category}
               </p>
            </div>
            {card.text.split("</br>").map((paragraph, index) => (
               <p
                  key={index}
                  className="text-[#CCCCCC] font-second sm:text-[21px] text-[14px]"
               >
                  {paragraph}
                  {index !== card.text.split("</br>").length - 1 && <br />}
               </p>
            ))}

            <div className="flex mb-6 sm:gap-6 gap-3 max-sm:flex-col">
               {card.data.map(({ id, value, label }, index) => (
                  <div key={id} className="flex">
                     <div className="sm:w-[160px] flex sm:flex-col max-sm:gap-2">
                        <Typography
                           text={value}
                           className="text-[30px] max-sm:h-8"
                        />
                        <p className="text-[#CCCCCC] text-[14px] font-second max-sm:self-end">
                           {label}
                        </p>
                     </div>
                     {index !== card.data.length - 1 && (
                        <div className="w-[1px] h-full bg-gradient-to-t from-black via-white to-black"></div>
                     )}
                  </div>
               ))}
            </div>
         </div>
         <div className="text-white flex flex-wrap sm:gap-3 gap-[6px]">
            {card.images.map(({ id, src }) => (
               <div className="grow" key={id}>
                  <img
                     src={src}
                     alt={src}
                     className="md:h-[100px] h-[76px]  lg:h-[175px] w-full object-cover rounded-md"
                  />
               </div>
            ))}
         </div>
      </div>
   )
}

export default Card
