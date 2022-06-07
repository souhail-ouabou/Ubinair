import React from 'react'
import './SmartBrief.css'
import AboutTheBrand from './AboutTheBrand'
import CollMoodboard from './CollMoodboard'
import { useSelector, useDispatch } from 'react-redux'

const SmartBrief = ({ indexPage }) => {
    const GetProjectDetailsReducer = useSelector(
        (state) => state.GetProjectDetailsReducer
    )
    const {
        project: projectDetails,
        loading: loadingProjectDetails,
        error,
    } = GetProjectDetailsReducer
    return (
        <>
         {loadingProjectDetails  ? (
                <div className=" text-white m-auto ">Loaaading ...</div>
            ) : projectDetails.specification?.length === 0 ? (
                <div className="text-white "></div>
            ) : (
            <main className={indexPage === 3 ? ' flex-1  pb-8  mt-14 ' : 'hidden'} >
                <div>
                    <AboutTheBrand project={projectDetails}/>
                    <CollMoodboard project={projectDetails}/>
                </div>
            </main>
              )}
        </>
    )
}

export default SmartBrief
