import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 bg-white shadow dark:bg-gray-800 bg-opacity-80" style={{zIndex:999}}>
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-800 capitalize dark:text-gray-300">
        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          home
        </a>

        <a href="#skills" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          skills
        </a>

        <a href="#timeline" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          education
        </a>

        <a href="#projects" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          projects
        </a>

        <a href="#contact" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
