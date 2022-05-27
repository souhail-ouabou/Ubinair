import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Aos from 'aos'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { DeleteProject } from '../../redux/actions/projectActions'

const ProjetBlock = ({ project, toggletab }) => {
    let dispatch = useDispatch()

    const deletehandler = (id) => {
        if (window.confirm('Are You Sure?')) {
            dispatch(DeleteProject(id))
        }
    }
    return (
        <>
            <Link to={`/dashboard/${project._id}`} className="cursor-pointer">
                {/* <h2>{isAdmin ? "Users" : "My Orders"}</h2> */}

                <div
                    aos-animate="fade-up"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className={toggletab === 1 ? 'block' : 'hidden'}
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
                        className="flex flex-row gap-8 bg-gray-100 shadow-md  p-[1.5rem] rounded-xl mb-3"
                    >
                        <div className="flex flex-col ml-7 w-[300px] justify-center  ">
                            <h1 className="text-2xl font-semibold leading-relaxed ">
                                {project.name}
                            </h1>
                            <h1 className="text-lg font-medium leading-relaxed ">
                                {project.type}
                            </h1>
                            <div className="flex flex-col">
                                <p className="text-lg font-medium leading-relaxed ">
                                    <strong>Plan : </strong> {project.plan}
                                </p>
                                <p className="text-lg font-medium leading-relaxed ">
                                    <strong>Advance State :</strong>{' '}
                                    {project.stateOfAdvance}
                                </p>
                                <p className="text-lg font-medium leading-relaxed ">
                                    <strong>Client :</strong>{' '}
                                    <strong className="text-green-600">
                                        {project.user.name}
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold leading-relaxed mt-4 ">
                                Total
                            </h1>
                            <ProgressBar done={project.totalProgresState} />
                            <Link
                                to="/profile"
                                className="bg-red-600 rounded-tr-md   w-10 h-10  absolute top-0 right-0 flex z-10"
                                 onClick={() => deletehandler(project._id)}
                            >
                                <FaTrash className="m-auto text-white justify-center items-center" />
                            </Link>
                            <Link
                                to="/profile"
                                className="bg-blue-600 rounded-tr-md  rounded-bl-xl w-10 h-10  absolute top-0 right-9 flex z-10"
                                // onClick={() => deletehandler(user._id)}
                            >
                                <FaEdit className="m-auto text-white justify-center items-center" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Link>
        </>
    )
}

export default ProjetBlock
