import React from 'react';
import '../index.css';
import image from './image.svg';
const Intro = () => {
  return (
    <div className='mx-auto  bg-cover  bg-center bg-no-repeat' >
    <div className="flex px-6 py-16 mx-auto ">
      <div className="items-center :flex box mt-40">
          <div className=" px-6 :max-w-lg">
            <h1  style={{ letterSpacing: '0.3em', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }} className="text-shadow-lg text-3xl font-semibold text-gray-700 dark:text-white lg:text-4xl">
              I AM  <br /> ADITYA <span className="text-blue-500">KUMAR</span>
            </h1>

            <p style={{ letterSpacing: '0.4em' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}} className="mt-6 text-shadow-sm  text-gray-600 dark:text-gray-400">
                I love programming. I am from Samastipur, Bihar. I am currently studying in IIT BHU
            </p>
            <a href="https://bit.ly/3HaDZcH">
            <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-700 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500 shadow-lg">
              Open Resume
            </button>
            </a>
          </div>
        
      </div>
      <img src={image} alt="Aditya Kumar"   className="my-component" />
    </div>
    </div>
  );
};

export default Intro;
