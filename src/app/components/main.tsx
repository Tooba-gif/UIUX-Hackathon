import React from "react";
import Image from "next/image";
import image7 from "@/app/public/image 7.png";
import image8 from "@/app/public/image 8 (1).png";

export default function Main(){
    return(
<div className="main">
    <div className="font-sans max-w-6xl max-md:max-w-md mx-auto">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center z-50 relative">
          <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]"><span className="text-blue-600"> <br />The Best Platform </span>for Car Rental</h2>
          <p className="text-gray-600 mt-6 text-base leading-relaxed">Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>

          <button type='button'
            className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Rental Car</button>

     </div>

        <div>  <Image src={image7} alt="pic1" className="w-200 h-116"></Image></div>
            <h1 className="pick">Pick-Up</h1>

     </div>
     <div className="box">
      <div className="grid md:grid-cols-3 gap-4 z-50 relative md:px-4 max-md:mt-12 mb-12">
        <div className="bg-white p-6 shadow rounded-md">
          <h3 className="text-gray-800 text-xl font-bold mb-2">Location</h3>
          <p className="text-sm text-gray-600">Select your location.</p>
         
        </div>
        <div className="bg-white p-6 shadow rounded-md">
          <h3 className="text-gray-800 text-xl font-bold mb-2">Date</h3>
          <p className="text-sm text-gray-600">Selet your date.</p>
          
        </div>
        <div className="bg-white p-6 shadow rounded-md">
          <h3 className="text-gray-800 text-xl font-bold mb-2">Time</h3>
          <p className="text-sm text-gray-600">Select your time </p>
        </div>
      </div>
      
    </div>
 </div>
   

 <div className="font-sans max-w-6xl max-md:max-w-md mx-auto">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center z-50 relative">
          <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]"> <br />Easy way to rent a car at a low price</h2>
          <p className="text-gray-600 mt-6 text-base leading-relaxed">Providing cheap car rental services and <br /> safe and comfortable facilities..</p>

          <button type='button'
            className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Rental Car</button>

         </div>

            <div>  <Image src={image8} alt="pic2" className="w-200 h-116"></Image></div>
            <h1 className="pick">Drop-Off</h1>

     </div>
     <div className="box">
      <div className="grid md:grid-cols-3 gap-4 z-50 relative md:px-4 max-md:mt-12 mb-12">
        <div className="bg-white p-6 shadow rounded-md">
          <h3 className="text-gray-800 text-xl font-bold mb-2">Location</h3>
          <p className="text-sm text-gray-600">Select your location.</p>
         
        </div>
        <div className="bg-white p-6 shadow rounded-md">
          <h3 className="text-gray-800 text-xl font-bold mb-2">Date</h3>
          <p className="text-sm text-gray-600">Selet your date.</p>
          
        </div>
        <div className="bg-white p-6 shadow rounded-md">
          <h3 className="text-gray-800 text-xl font-bold mb-2">Time</h3>
          <p className="text-sm text-gray-600">Select your time </p>
        </div>
     </div>
 </div>
 </div>
 </div>
    )
}