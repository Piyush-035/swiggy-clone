import React, { useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';  // Install react-icons
import DineCard from "./DineCard"


export default function DineCard({ restCard }) {

    

  return (
    <div className="max-w-sm flex-none gap-3 shadow-xl bg-white mb-10 rounded-xl">
    <a href={restCard?.cta?.link}>
      <div className="relative">
        <img
          className="w-80 h-50 object-cover rounded-xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restCard?.info?.mediaFiles[0]?.url
          }
          alt="Restaurant"
        />
        {/* Gradient overlay behind the text */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
        <p className="absolute left-2 bottom-2 text-xl text-white">
          {restCard?.info?.name.length > 20
            ? `${restCard?.info?.name.slice(0, 20)}...` // truncate name if it's longer than 20 characters
            : restCard?.info?.name}
        </p>
        <p className="absolute bottom-2 right-2 text-xl text-white">
          {restCard?.info?.rating?.value}
        </p>
      </div>
      <div className="mt-2 p-2">
        <div className="flex justify-between gap-2 font-extralight">
          <p>{restCard?.info?.cuisines.join(", ")}</p>
          <p>{restCard?.info?.costForTwo}</p>
        </div>
        <div className="flex justify-between font-extralight">
          <p>{restCard?.info?.locality}</p>
          <p>{restCard?.info?.locationInfo?.distanceString}</p>
        </div>
        <div className="flex bg-green-600 mt-2 items-center rounded-xl p-1">
          <img
            className="w-8 h-8 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restCard?.info?.vendorOffer?.info?.offersLogoV2[0]?.logo
            }
            alt="Offer"
          />
          <p className="text-white ml-2">
            {restCard?.info?.offerInfoV2?.otherOffers?.offers[0]?.header}
          </p>
        </div>
        <div className="bg-green-200 mt-2 text-green-700 p-2 rounded-xl">
          <p>{restCard?.info?.customerOffer?.infos[0]?.description}</p>
        </div>
      </div>
    </a>
  </div>

    );

    

}

export function HorizontalScrollDineCards({ cardsData }) {
    const scrollContainerRef = useRef(null);
  
    // Function to scroll the container right
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });  // Adjusted scroll value
      }
    };
  
    // Function to scroll the container left
    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });  // Adjusted scroll value
      }
    };
  
    return (
      <div className="relative w-full">
        {/* Left Arrow */}
        <div
          className="cursor-pointer p-2 bg-gray-500 rounded-full hover:bg-gray-700 transition-colors absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollLeft}
        >
          <FaArrowLeft className="text-white text-xl" />
        </div>
  
        {/* Scrollable Container */}
        <div
          className="flex overflow-x-auto py-4 px-2 space-x-4 scroll-smooth"
          ref={scrollContainerRef}
        >
          {cardsData.map((card, index) => (
            <DineCard key={index} restCard={card} />
          ))}
        </div>
  
        {/* Right Arrow */}
        <div
          className="cursor-pointer p-2 bg-gray-500 rounded-full hover:bg-gray-700 transition-colors absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollRight}
        >
          <FaArrowRight className="text-white text-xl" />
        </div>
      </div>
    );
  }
  