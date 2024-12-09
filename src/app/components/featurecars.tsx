import Image from "next/image";
import car9 from "@/app/public/car (9).png";
import car10 from "@/app/public/car (10).png";
import car11 from "@/app/public/Car (11).png";
import car12 from "@/app/public/Car (12).png";

export default function FeatureCars(){
    return(
        <div className="fcar">
<div className=" font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Popular Car</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
           <div> <h1 className="title" text-xl font-bold leading-7 text-left>Koenigsegg</h1>
            <p>Sports</p>
            </div>
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>

          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Image src={car9} alt="c1"
              className="h-full w-full object-contain"></Image>
          </div>

          <div className= " flex space-x-2 mt-4 p-6 bg-white  ">
            <div><h4 className="text-lg text-gray-800 font-bold mt-2">$99.00/day</h4>
            </div>
            <div>
            <button type='button'
            className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Rent Now</button>
            </div>
          </div>
   </div>

    <div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
             <div> <h1 className="title" text-xl font-bold leading-7 text-left>Nissan GT-R</h1>
             <p>Sports</p>
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Image src={car10} alt="c2" className="h-full w-full object-contain"></Image>
            </div>
          </div>
          <div className= " flex space-x-2 mt-4 p-6 bg-white  ">
            <div><h4 className="text-lg text-gray-800 font-bold mt-2">$80.00/day</h4>
            <p className="text-mdm text-gray-500">$100.00</p>
            </div>
            <div>
            <button type='button'
            className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Rent Now</button>
            </div>
        </div>
 </div>
    
    <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
             <div> <h1 className="title" text-xl font-bold leading-7 text-left>Roll-Royce</h1>
             <p>Sedan</p>
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Image src={car11} alt="c3" className="h-full w-full object-contain"></Image>
            </div>
          </div>
          <div className= " flex space-x-2 mt-4 p-6 bg-white  ">
            <div><h4 className="text-lg text-gray-800 font-bold mt-2">$96.00/day</h4>
            </div>
            <div>
            <button type='button'
            className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Rent Now</button>
            </div>
     </div>
    </div>
    
        <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
             <div> <h1 className="title" text-xl font-bold leading-7 text-left>Nissan GT-R</h1>
             <p>Sports</p>
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Image src={car12} alt="c4" className="h-full w-full object-contain"></Image>
            </div>
          </div>
          <div className= " flex space-x-2 mt-4 p-6 bg-white  ">
            <div><h4 className="text-lg text-gray-800 font-bold mt-2">$80.00/day</h4>
            </div>
            <div>
            <button type='button'
            className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Rent Now</button>
            </div>
        </div>
    </div>

</div>
</div>
</div>
    )
}