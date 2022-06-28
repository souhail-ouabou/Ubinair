import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Aos from 'aos'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { DeleteProject } from '../../redux/actions/projectActions'
import ReactTooltip from 'react-tooltip'
const ProjetBlock = ({ project, toggletab }) => {
    let dispatch = useDispatch()
    const getUserReducer = useSelector((state) => state.getUserReducer)
    const { loading, user, isAdmin } = getUserReducer

    const deletehandler = (id) => {
        if (window.confirm('Are You Sure?')) {
            dispatch(DeleteProject(id))
        }
    }

    return (
        <>
            <ReactTooltip place="top" type="error" effect="float" data-multiline="true" />
            <Link
                to={user.client || isAdmin ? `/dashboard/${project._id}` : `#`}
                className={
                    user.client || isAdmin
                        ? `cursor-pointer`
                        : `cursor-not-allowed`
                }
                data-tip={
                    user.client || isAdmin
                        ? ``
                        : `You must  be a client to  get access to dashboard`
                }
            >
                {/* <h2>{isAdmin ? "Users" : "My Orders"}</h2> */}

                <div
                    aos-animate="fade-up"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-anchor
                    className={
                        toggletab === 1
                            ? 'block md:flex-row md:w-full flex-col  '
                            : 'hidden'
                    }
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
                        className="flex md:flex-row md:gap-8 bg-gray-100 shadow-md flex-col  p-[1.5rem] rounded-xl mb-3  items-center justify-center"
                    >
                        <div className="flex flex-col  gap-2 md:gap-0 md:w-[300px] justify-center  ">
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
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold leading-relaxed m-0 md:mt-4 md:text-left text-center">
                                Total
                            </h1>
                            <ProgressBar done={project.totalProgresState} />
                            <Link
                                to="/profile"
                                className={`${
                                    isAdmin
                                        ? 'bg-red-600 rounded-tr-md  rounded-bl-xl w-10 h-10  absolute top-0 right-0 flex z-10'
                                        : 'hidden'
                                }`}
                                onClick={() => deletehandler(project._id)}
                            >
                                <FaTrash className="m-auto text-white justify-center items-center" />
                            </Link>
                            {/* <Link
                                to="/profile"
                                className="bg-blue-600 rounded-tr-md  rounded-bl-xl w-10 h-10  absolute top-0 right-9 flex z-10"
                                // onClick={() => deletehandler(user._id)}
                            >
                                <FaEdit className="m-auto text-white justify-center items-center" />
                            </Link> */}
                        </div>
                    </motion.div>
                </div>
            </Link>
        </>
    )
}

export default ProjetBlock
