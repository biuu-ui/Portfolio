import React from 'react'

const About = () => {
  return (
    <div name ="about" className="w-full h-scree bg-black text-center py-20">
        <div className='grid grid-cols-2 justify-between items-center w-full h-full'>
          <div className='p-40'>
            <p className='text-4xl text-white font-bold inline border-b-4 border-lime-300'>
              About
            </p>
          </div>
          
          <div className='p-16 w-full rounded-full max-w-lg bg-lime-300 text-black'>
            <div className='sm:text-center text-4xl font-bold pb-8'>
              <p>Hi There!
                <br></br>Nice to Meet You</p>
            </div>
            <div>
                <p>I’m a Student at Singaperbangsa Karawang University.
                I majored in in information systems because I was interested in Technology. Especially design and coding.
                Sometimes I design poster and build my own website while I studying it. 
                Ultimately, seeing my ideas come to life is the thing that I enjoy the most about coding.
                I like listening to music and watching movies. I also a Kpop Fangirl and Thaienthu</p>  
            <div className='flex items-center justify-center'>
                <button className='text-black group rounded-full border-2 border-black px-6 py-3 m-5 flex items-center hover:bg-lime-600 hover:border-black'>
                    See More
                </button>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About