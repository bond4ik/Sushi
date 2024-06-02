import React from 'react';
import { FaTh } from 'react-icons/fa';

function SH() {
  const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className=" container mx-auto bg-white pl-5 pr-5 flex justify-between items-center transition-all duration-300">
      <a className='cursor-pointer' onClick={() => smoothScroll('#branded-rolls')}>Фирменные роллы</a>
      <a className='cursor-pointer' onClick={() => smoothScroll('#baked-rolls')}>Запеченные роллы</a> 
      <a className='cursor-pointer' onClick={() => smoothScroll('#classic-rolls')}>Классические роллы</a>
      <a className='cursor-pointer' onClick={() => smoothScroll('#sushi')}>Суши</a> 
      <a className='cursor-pointer' onClick={() => smoothScroll('#stocks')}>АКЦИИ НАБОРЫ</a>
      <FaTh className="text-lg" />
    </div>
  );
}

export default SH;

