import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const ProjetBlock = ({ project, toggletab }) => {

    return (
        <>
            <Link
                to={`/dashboard/${project._id}`}
                className="col-right mb-3 cursor-pointer"
            >
                {/* <h2>{isAdmin ? "Users" : "My Orders"}</h2> */}

                <div
                    className={toggletab === 1 ? 'block' : 'hidden'}
                    aos-animate="fade-up"
                    data-aos="fade-up"
                    data-aos-duration="3000"
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
                        className="flex flex-row gap-8 bg-gray-100 shadow-md  p-[1.5rem] rounded-xl"
                    >
                        <div className="flex flex-col ml-7 w-[330px]  ">
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
                                    <strong>stateOfAdvance : </strong>{' '}
                                    {project.stateOfAdvance}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold leading-relaxed ">
                            Total
                          
                            </h1>
                            <ProgressBar done= {project.totalProgresState} />
                        </div>
                    </motion.div>
                </div>
            </Link>
        </>
    )
}

export default ProjetBlock
