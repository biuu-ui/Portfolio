import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
        
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h3 className='text-xl sm:text-7xl font-bold text-[#ffffff] text-center font-[Rubic Dirt]'>
          I'm Nisa Ainul Hakim
        </h3>
        <p className='text-[#ffffff] p-4 text-center'>
        Student at Singaperbangsa Karawang University | 
        Information systems major</p>
        <div className='flex items-center justify-center'>
          <button className='text-white group rounded-full border-2 px-6 py-3 flex items-center justify-center hover:bg-lime-300 hover:border-lime-600 hover:text-black'>
            See More
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
