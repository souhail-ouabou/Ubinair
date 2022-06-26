import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Link as LinkReactS } from 'react-scroll'
import Logo from '../../img/Logo.png'
import Avatar from '../../img/avatar.png'
import { logout } from '../../redux/actions/authAction'
import './Navbar.css'
import { FaAngleDown, FaPhone, FaArrowRight } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
const Nav = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const getUserReducer = useSelector((state) => state.getUserReducer)
    const { loading, user, isLogged } = getUserReducer

    const [showDrop, setShowDrop] = useState(false)
    const [inHome, setInHome] = useState(true)

    const showDropInMobile = () => {
        setShowDrop(!showDrop)
    }
    const hideItems = () => {
        setInHome(false)
        console.log('In Home', inHome)
    }
    const showItems = () => {
        setInHome(true)
    }
    const userLink = () => {
        return (
            <li className="drop-nav  md:ml-0 ">
                <div
                    className="text-white  font-semibold flex items-center justify-center  rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80  text-sm px-7 md:px-4 text-center md:ml-2 py-1.5 "
                    onClick={showDropInMobile}
                >
                    {loading ? (
                        <span>Loading...</span>
                    ) : (
                        <>
                            <Link
                                to="#"
                                className="flex items-center justify-center gap-2"
                                onClick={showDropInMobile}
                            >
                                <img
                                    className="img-ava"
                                    src={user.avatar}
                                    alt="avatar"
                                />
                                {user.name}
                                <i>
                                    <FaAngleDown />
                                </i>
                            </Link>
                        </>
                    )}

                    <ul
                        className={`dropdown  ${
                            showDrop
                                ? 'md:hidden dropdown mt-2 top-12 left-1'
                                : 'dropdown mt-2 top-12 left-1 hidden'
                        }`}
                    >
                        <li className="mt-2 mb-2 cursor-pointer">
                            <Link to="/profile" onClick={hideItems}>
                                Profile
                            </Link>
                        </li>

                        <li className="mb-2 cursor-pointer">
                            <Link to="/" onClick={logoutHandler}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
        )
    }

    // useEffect(() => {
    //     setInHome(JSON.parse(window.localStorage.getItem('inHome')))
    // }, [])

    // useEffect(() => {
    //     window.localStorage.setItem('inHome', inHome)
    // }, [inHome])

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        // <header className='flex  absolute -top-10 right-5 left-5 px-5 py-12 justify-between items-center  bg-stone-50/20 shadow-lg shadow-black-500/5 rounded-2xl backdrop-blur-md border-2 border-white/25 '>
        <header className="header mt-[2.6rem] z-20 fixed   py-[14px] px-[50px]">
            <div>
                <Link
                    to={'/'}
                    className="flex flex-col  md:flex-row items-center gap-2 md:m-0 "
                    onClick={showItems}
                >
                    <img
                        className="w-16 object-cover m-auto "
                        src={Logo}
                        alt="Logo"
                    />
                    <p className="text-[#EEEEEF] text-xl font-semibold m-auto">
                        Ubinair
                    </p>
                </Link>
            </div>
            <motion.ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex items-center  z-auto static   left-0 w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[-400px] transition-all ease-in duration-500 "
            >
                {inHome && (
                    <>
                        <LinkReactS
                            spy={true}
                            className=" text-base uppercase font-bold py-2 px-4 rounded-3xl text-[#EEEEEF] hover:bg-[#3c3642] hover:shadow-black/10 duration-100 transition-all ease-in-out cursor-pointer mr-3 md:block hidden "
                            activeClass="rounded-3xl  bg-[#3c3642] shadow-black/10  cursor-pointer"
                            to="methode"
                            offset={-98}
                            duration={900}
                        >
                            <li>la méthode</li>
                        </LinkReactS>
                        <LinkReactS
                            className=" text-base uppercase font-bold py-2 px-4 rounded-3xl text-[#EEEEEF] hover:bg-[#3c3642] hover:shadow-black/10 duration-100 transition-all ease-in-out cursor-pointer mr-3 md:block hidden"
                            to="missions"
                            activeClass="rounded-3xl  bg-[#3c3642] shadow-black/10  cursor-pointer"
                            spy={true}
                            offset={-100}
                            duration={500}
                        >
                            <li>Missions</li>
                        </LinkReactS>
                        <LinkReactS
                            className=" text-base uppercase font-bold py-2 px-4 rounded-3xl text-[#EEEEEF] hover:bg-[#3c3642] hover:shadow-black/10 duration-100 transition-all ease-in-out cursor-pointer mr-3 md:block hidden"
                            to="offres"
                            spy={true}
                            activeClass="rounded-3xl  bg-[#3c3642] shadow-black/10  cursor-pointer"
                            offset={-100}
                            duration={500}
                        >
                            <li>Nos Offres</li>
                        </LinkReactS>
                        <LinkReactS
                            className="text-base uppercase font-bold py-2 px-4 rounded-3xl text-[#EEEEEF] hover:bg-[#3c3642] hover:shadow-black/10 duration-100 transition-all ease-in-out cursor-pointer md:block hidden"
                            activeClass="rounded-3xl  bg-[#3c3642] shadow-black/10  cursor-pointer"
                            to="about"
                            spy={true}
                            offset={-100}
                            duration={500}
                        >
                            {/* <li>About</li> */}
                        </LinkReactS>
                    </>
                )}

                {isLogged ? (
                    userLink()
                ) : (
                    <Link
                        to="login"
                        spy={true}
                        offset={-100}
                        duration={500}
                        onClick={hideItems}
                    >
                        <button
                            type="button"
                            className="text-white font-semibold flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80   text-sm px-5 py-2.5 text-center ml-2"
                        >
                            Login <FaArrowRight className="ml-3" />
                        </button>
                    </Link>
                )}
            </motion.ul>
        </header>
    )
}

export default Nav
