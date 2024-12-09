import React from "react";


export default function Footer(){
    return(
      <div className=" foot font-sans tracking-wide bg-gray-50 px-10 pt-12 pb-6">
     <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-md">
          <a href='javascript:void(0)'>
        <p className="logo"w-10 h-10 ml-16 gap-0 opacity-0 text-l font-bold > MORENT
          </p>  
          </a>
            <p className="text-gray-600 leading-relaxed text-sm"><br />Our vision is to provide convenience and help increase your sales business.</p>
           </div>
          
           <ul className="mt-10 flex space-x-5">
            <li>
              <a href='javascript:void(0)'></a>
            </li>
          </ul>
        </div>
 

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">About</h4>

          <ul className="mt-6 space-y-4">
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>How it work</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Featured</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Partnersip</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Business Relation</a>
            </li>  
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Community</h4>
          <ul className="space-y-4 mt-6">
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Events</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Blog</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Podcast</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Invite a friend</a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Socials</h4>

          <ul className="space-y-4 mt-6">
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Discord</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Instagram</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Twitter</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Facebook</a>
            </li>
          </ul>
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />



      <div className= "end flex flex-wrap max-md:flex-col gap-4">
        <ul className="md:flex md:space-x-6 max-md:space-y-2">
        <p className='text-gray-600 text-sm md:ml-auto'>©2022 MORENTS. All rights reserved.</p>
          <li>
            <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Privacy & Policy</a>
          </li>
          <li>
            <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </div>
    <div><footer/></div>
  </div>
 )
}