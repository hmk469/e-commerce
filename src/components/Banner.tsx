'use client'
// Import necessary dependencies
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import model1 from '@/assets/sliders/model1.png';
import model2 from '@/assets/sliders/model2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Clock, Smartphone,Map, Mail, MailIcon } from 'lucide-react';

const Banner = () => {
  // Slider settings
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="lg:min-h-screen relative">
      {/* Use the Image component for better performance */}
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="w-full py-32 lg:py-0 lg:h-screen bg-slate-200 relative">
          <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-designColor z-0 relative">
            <Image src={model1} alt="Slider Image" className='absolute object-cover right-0 lg:-right-48 lg:h-screen' />
          </div>
          <div className='lg:absolute lg:top-1/2 lg:left-2/3 transfrom lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-3.5'>
          <p className='text-xl uppercase'>Get the Best Products for you</p>
            <p className='w-96 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam numquam in iure qui earum odio et porro nesciunt distinctio tempore, incidunt exercitationem dolores cum sequi error quia, atque odit?</p>
            <p className="text-2xl semibold">
              Phones in Demand
            </p>
            <button className='text-base font-medium text-white bg-designColor rounded-md px-4 py-2'>
              Select a Product
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="w-full py-32 lg:py-0 lg:h-screen bg-slate-200 relative">
          <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-designColor z-0 relative">
            <Image src={model2} alt="Slider Image" className='absolute object-cover right-0 lg:-right-48 lg:h-screen' />
          </div>
          <div className='lg:absolute lg:top-1/2 lg:left-2/3 transfrom lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-3.5'>
          <p className='text-xl uppercase'>Get the Best Products for you</p>
            <p className='w-96 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam numquam in iure qui earum odio et porro nesciunt distinctio tempore, incidunt exercitationem dolores cum sequi error quia, atque odit?</p>
            <p className="text-2xl semibold">
              Phones in Demand
            </p>
            <button className='text-base font-medium text-white bg-designColor rounded-md px-4 py-2'>
              Select a Product
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="w-full py-32 lg:py-0 lg:h-screen bg-slate-200 relative">
          <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-designColor z-0 relative">
            <Image src={model1} alt="Slider Image" className='absolute object-cover right-0 lg:-right-48 lg:h-screen' />
          </div>
          <div className='lg:absolute lg:top-1/2 lg:left-2/3 transfrom lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-3.5'>
          <p className='text-xl uppercase'>Get the Best Products for you</p>
            <p className='w-96 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam numquam in iure qui earum odio et porro nesciunt distinctio tempore, incidunt exercitationem dolores cum sequi error quia, atque odit?</p>
            <p className="text-2xl semibold">
              Phones in Demand
            </p>
            <button className='text-base font-medium text-white bg-designColor rounded-md px-4 py-2'>
              Select a Product
            </button>
          </div>
        </div>
        <div className="w-full py-32 lg:py-0 lg:h-screen bg-slate-200 relative">
          <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-designColor z-0 relative">
            <Image src={model2} alt="Slider Image" className='absolute object-cover right-0 lg:-right-48 lg:h-screen' />
          </div>
          <div className='lg:absolute lg:top-1/2 lg:left-2/3 transfrom lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-3.5'>
          <p className='text-xl uppercase'>Get the Best Products for you</p>
            <p className='w-96 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam numquam in iure qui earum odio et porro nesciunt distinctio tempore, incidunt exercitationem dolores cum sequi error quia, atque odit?</p>
            <p className="text-2xl semibold">
              Phones in Demand
            </p>
            <button className='text-base font-medium text-white bg-designColor rounded-md px-4 py-2'>
              Select a Product
            </button>
          </div>
        </div>
      </Slider>
      <div className="h-20 bg-white absolute left-1/2 -bottom-10 transform -translate-x-1/2 hidden lg:inline-flex items-center gap-x-12 p-10">
      <div className='flex items-center gap-5 w-60'>
        <Clock className='text-designColor w-8 h-8'/>
        <div>
          <p>Saturday - Thursday</p>
          <p className="font-semibold">7:00 - 20:00</p>
        </div>
      </div>
       <div className='flex items-center gap-5 w-60'>
        <Smartphone className='text-designColor w-8 h-8'/>
        <div>
          <p>0000000</p>
          <p className="font-semibold">Order by Phones</p>
        </div>
      </div>
       <div className='flex items-center gap-5 w-60'>
        <Map className='text-designColor w-8 h-8'/>
        <div>
          <p>Myanmar</p>
          <p className="font-semibold">Address</p>
        </div>
      </div>
      <div className='flex items-center gap-5 w-60'>
        <MailIcon className='text-designColor w-8 h-8'/>
        <div>
          <p>Get am invoice</p>
          <p className="font-semibold">Email</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
