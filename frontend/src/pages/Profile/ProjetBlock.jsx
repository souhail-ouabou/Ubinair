import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'

const ProjetBlock = ({project,toggletab}) => {

    return (
        <div className="col-right mb-1 ">
            {/* <h2>{isAdmin ? "Users" : "My Orders"}</h2> */}

            <div>
        
                <div
                    className={toggletab === 1 ? 'block' : 'hidden'}
                    aos-animate="fade-up"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <div className="flex flex-row gap-8 bg-gray-100 shadow-md  p-9 rounded-xl">
                        <div className="flex flex-col ml-7 w-[330px]  ">
                            <h1 className="text-2xl font-semibold leading-relaxed ">
                               {project.name}
                            </h1>
                            <h1 className="text-lg font-medium leading-relaxed ">
                                {project.type}
                            </h1>
                            <div className="flex flex-col">
                                <p className="text-lg font-medium leading-relaxed ">
                                    <strong>Plan : </strong>  {project.plan}
                                </p>
                                <p className="text-lg font-medium leading-relaxed ">
                                    <strong>stateOfAdvance : </strong>  {project.stateOfAdvance}
                                </p>
                            </div>

                           
                        </div>
                        <div >
                            <h1 className="text-2xl font-semibold leading-relaxed ">
                                Total
                            </h1>
                            <ProgressBar done="70" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjetBlock
