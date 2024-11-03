import React, { useState } from "react"
import Card from "./Card"
import background from "../image/Frame1705.png"
import { Cards } from "../DataList"
import { FaChevronRight } from "react-icons/fa6"

const Body2 = () => {
   const [selectedCard, setSelectedCard] = useState(1)
   console.log(Cards)
   return (
      <div className="w-full bg-[#0C0C13] max-sm:py-6 py-16 max-lg:flex-col flex justify-center gap-20">
         <div className="relative lg:w-[910px] max-lg:px-4 max-lg:gap-6 max-lg:flex max-lg:flex-col justify-start">
            {Cards.map((card) => (
               <Card key={card.id} card={card} selectedCard={selectedCard} />
            ))}
         </div>
         <button className="self-center z-50 max-lg:hidden">
            <FaChevronRight className="text-white z-50  text-[45px]" />
         </button>
      </div>
   )
}

export default Body2
