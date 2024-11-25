import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { ImCool } from "react-icons/im";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [contact, setContact] = useState(false);
    const onClick = () => setContact(!contact);

return (
    <div className="fixed w-full h-20 flex justify-between items-center px-8 bg-black text-white">
          <h2 className='font-bold text-3xl'>NISAC.</h2>
    
        <ul className='hidden md:flex gap-10'>
            <li>
            <Link to="home" smooth={true} duration={500}>
            Home
            </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500}>
            About
            </Link>
            </li>
            <li>
            <Link to="project" smooth={true} duration={500}>
            Project
            </Link>
            </li>
        </ul>

      <button
      className="bg-lime-300 text-black font-bold py-2 px-4 group rounded-full shadow-lg flex items-center space-x-2 hover:bg-lime-600"
      onClick={() => setContact((contact) => !contact)}>
      <span>Contact Me</span>
      <span className="group-hover:rotate-360 duration-500">
        <ImCool className="ml-2" />
      </span>
      </button>
  
        <div name='contact' className={!contact ? 'hidden': 'flex flex-col Contact absolute top-20 right-16 p-4 rounded-lg bg-[#bef264] border-black text-black'}>
          <ul className='flex flex-col gap-4'> 
            <li><a href="https://www.instagram.com/nisainl.hk/" target='_blank'>Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/nisa-ainul-hakim/" target='_blank'>Linkedin</a></li>
            <li><a href="https://github.com/biuu-ui/" target='_blank'>Github</a></li>
          </ul>
        </div>
        
      
        <div onClick={handleClick} className='md:hidden z-10 text-white'>
                {nav? <FaTimes /> : <FaBars />}
        </div>
            
                <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center text-white'}>
                    <li className='py-8 text-4xl'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className='py-8 text-4xl'><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li className='py-8 text-4xl'><Link to="project" smooth={true} duration={500}>Project</Link></li>
                </ul>
    </div>      
  )
}

export default Navbar