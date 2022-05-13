import React from 'react'
import  {motion}  from 'framer-motion'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import Logo from '../../../img/Logo.png'
import { FaPhone } from 'react-icons/fa'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
const SimpleNav = (props) => {

    return (
        // <header className='flex  absolute -top-10 right-5 left-5 px-5 py-12 justify-between items-center  bg-stone-50/20 shadow-lg shadow-black-500/5 rounded-2xl backdrop-blur-md border-2 border-white/25 '>
        <header className="header mt-[2.6rem] z-20 fixed">
         
            <motion.ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{duration:1.0}}
                className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full ml-10 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100  "
            >
                
                <Link  spy={true} offset={-100} duration={500}>
                    <button
                        type="button"
                        className="text-white  font-semibold flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80  text-sm px-5 py-2.5 text-center mr-2 "
                        onClick={props.onClick}
                    >
                        <FaArrowAltCircleLeft  /> <span className="ml-2">Précédent </span>
                    </button>
                </Link>
            </motion.ul>

            <motion.Link to={'/'}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
           transition={{duration:1.0}}
             className="flex items-center gap-2  mr-10 ">
                <img
                    className="w-16 object-cover m-auto "
                    src={Logo}
                    alt="Logo"
                />
                <p className="text-[#EEEEEF] text-xl font-semibold m-auto">
                    Ubinair
                </p>
            </motion.Link>
        </header>
    )
}

export default SimpleNav;
