import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Aos from 'aos'
import { FaTrash } from 'react-icons/fa'
import { DeleteUser } from '../../redux/actions/usersAction'

const UserBlock = ({ user, toggletab }) => {
    let dispatch = useDispatch()


    const deletehandler = (id) => {
        if (window.confirm('Are You Sure?')) {
            dispatch(DeleteUser(id))
        }
    }
    return (
        <>
            <Link to={`/user/${user._id}`} className="cursor-pointer">
                <div
                    aos-animate="fade-up"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-anchor
                    className={toggletab === 2 ? 'block md:flex-row w-full flex-col items-center justify-center ' : 'hidden'}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                        }}
                        transition={{ duration: 0.2 }}
                        className="flex md:flex-row md:gap-64 bg-gray-200 shadow-md flex-col  md:p-1 rounded-xl mb-3 justify-center p-[1.5rem] items-center"
                    >
                        <div className="flex flex-col md:ml-0  ml-16 w-[300px]  ">
                            <h1 className="text-2xl font-semibold leading-relaxed capitalize ">
                                {user.name}
                            </h1>
                            <h1 className="text-lg font-medium leading-relaxed ">
                                {user.email}
                            </h1>
                            <div className="flex flex-col">
                                <p className="text-lg font-medium leading-relaxed ">
                                    <strong>Phone : </strong> {user.phone}
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex flex-col relative">
                                <div className="avatar-right  ">
                                    <img src={user.avatar} alt="" />
                                </div>
                                <h1 className="text-2xl font-semibold leading-relaxed ">
                                    { user.role === 1 ? (
                                        <div className="text-purple-700 text-center">
                                            Admin
                                        </div>
                                    ) : user.client ? (
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
                            <Link
                                to="/profile"
                                className="bg-red-600 rounded-tr-md  rounded-bl-xl w-10 h-10  absolute top-0 right-0 flex z-10"
                                onClick={() => deletehandler(user._id)}
                            >
                                <FaTrash className="m-auto text-white justify-center items-center" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Link>
        </>
    )
}

export default UserBlock
