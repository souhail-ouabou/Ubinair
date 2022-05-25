import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Aos from 'aos'
import { FaTrash } from 'react-icons/fa'

const UserBlock = ({ user, toggletab }) => {
    return (
        <>
            <Link to={`/user/${user._id}`} className="cursor-pointer">

                <div
                    aos-animate="fade-up"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className={toggletab === 2 ? 'block' : 'hidden'}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.07,
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                        }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-row gap-64 bg-gray-200 shadow-md  p-1 rounded-xl mb-3 justify-center"
                    >
                        <div className="flex flex-col ml-7 w-[300px] justify-center  ">
                            <h1 className="text-2xl font-semibold leading-relaxed capitalize ">
                                {user.name}
                            </h1>
                            <h1 className="text-lg font-medium leading-relaxed ">
                                {user.email}
                            </h1>
                            <div className="flex flex-col">
                                <p className="text-lg font-medium leading-relaxed ">
                                    <strong>Phone : </strong>  {user.phone}
                                </p>
                                <p className="text-lg font-medium leading-relaxed ">
                                    <strong>Role : </strong>{user.role ===1 ?  <span className="text-green-600 text-center text-lg font-semibold leading-relaxed">
                                            Admin
                                        </span> :  <span className="text-red-600 text-center text-lg font-semibold leading-relaxed">
                                            No admin
                                        </span>}
                                  
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex flex-col relative">
                                <div className="avatar-right  ">
                                    <img src={user.avatar} alt="" />
                                </div>
                                <h1 className="text-2xl font-semibold leading-relaxed ">
                                    {user.client ? (
                                        <div className="text-green-600 text-center">
                                            Client
                                        </div>
                                    ) : (
                                        <div className="text-red-600 text-center">
                                            User
                                        </div>
                                    )}
                                </h1>
                            </div>
                            <div className="bg-red-600 rounded-tr-md  rounded-bl-xl w-10 h-10  absolute top-0 right-0 flex ">
                                <FaTrash className="m-auto text-white justify-center items-center" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Link>
        </>
    )
}

export default UserBlock
