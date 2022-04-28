import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'
import { FaPhone } from 'react-icons/fa'
const Nav = () => {
    return (
        // <header className='flex  absolute -top-10 right-5 left-5 px-5 py-12 justify-between items-center  bg-stone-50/20 shadow-lg shadow-black-500/5 rounded-2xl backdrop-blur-md border-2 border-white/25 '>
        <header className="header  mt-12 z-20">
            <Link to={'/'} className="flex items-center gap-2 md:m-0 ml-24">
                <img
                    className="w-16 object-cover m-auto "
                    src={Logo}
                    alt="Logo"
                />
                <p className="text-[#EEEEEF] text-xl font-semibold m-auto">
                    Ubinaire
                </p>
            </Link>

            <motion.ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[-400px] transition-all ease-in duration-500 "
            >
                <li className="text-base uppercase font-bold py-2 px-4 rounded-3xl text-[#EEEEEF] hover:bg-[#3c3642] hover:shadow-black/10 duration-100 transition-all ease-in-out cursor-pointer">
                    la méthode
                </li>
                <li className="text-base uppercase font-bold py-2 px-4 rounded-3xl text-[#EEEEEF] hover:bg-[#3c3642] hover:shadow-black/10 duration-100 transition-all ease-in-out cursor-pointer">
                    Missions Réussies
                </li>
                <li className="text-base uppercase font-bold py-2 px-4 rounded-3xl text-[#EEEEEF] hover:bg-[#3c3642] hover:shadow-black/10 duration-100 transition-all ease-in-out cursor-pointer">
                    Nos Offres
                </li>
                <li className="text-base uppercase font-bold py-2 px-4 rounded-3xl text-[#EEEEEF] hover:bg-[#3c3642] hover:shadow-black/10 duration-100 transition-all ease-in-out cursor-pointer">
                    About
                </li>
                <button
                    type="button"
                    className="text-white font-semibold flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80  text-sm px-5 py-2.5 text-center mr-2 "
                >
                    <span>Je Réserve un call ! </span>{' '}
                    <FaPhone className="ml-3" />
                </button>
            </motion.ul>
        </header>
    )
}

export default Nav
