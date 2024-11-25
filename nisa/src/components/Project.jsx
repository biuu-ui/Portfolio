import React from 'react';
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.png'
import photo6 from '../assets/photo6.png'


const Work = () => {
  
  return (
    <div name='project' className='w-full md:h-screen text-white bg-black my-28'>
      <div className='max-w-[1000px] mx-auto p-4 justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='sm:text-left text-4xl font-bold inline border-b-4 text-white border-lime-300'>
            Project
          </p>
        </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-28">

                <div style={{ backgroundImage: `url(${photo1})`}} 
                className="shadow-md shadow-[#bef264] group container rounded-md flex justify-center text-center items-center mx-auto content-div"> 
                </div>

                <div style={{ backgroundImage: `url(${photo2})`}} 
                className="shadow-md shadow-[#bef264] group container rounded-md flex justify-center text-center items-center mx-auto content-div "> 
                </div>

                <div style={{ backgroundImage: `url(${photo3})`}} 
                className="shadow-md shadow-[#bef264] group container rounded-md flex justify-center text-center items-center mx-auto content-div "> 
                </div>

                <div style={{ backgroundImage: `url(${photo4})`}} 
                className="shadow-md shadow-[#bef264] group container rounded-md flex justify-center text-center items-center mx-auto content-div "> 
                </div>

                <div style={{ backgroundImage: `url(${photo5})`}} 
                className="shadow-md shadow-[#bef264] group container rounded-md flex justify-center text-center items-center mx-auto content-div "> 
                </div>

                <div style={{ backgroundImage: `url(${photo6})`}} 
                className="shadow-md shadow-[#bef264] group container rounded-md flex justify-center text-center items-center mx-auto content-div "> 
                </div>

            </div>
        </div>
    </div>
  );
};

export default Work;
