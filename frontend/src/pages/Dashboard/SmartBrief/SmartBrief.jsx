import React from 'react'
import './SmartBrief.css'

import AboutTheBrand from './AboutTheBrand'
import CollMoodboard from './CollMoodboard'
import { useSelector } from 'react-redux'

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
            <main className={indexPage === 3 ? ' flex-1  pb-8  mt-14 ml-80' : 'hidden'} >
         {loadingProjectDetails  ? (
                <div className=" text-white m-auto ">Loaaading SB ...</div>
            ) : projectDetails.specification?.length === 0 ? (
                <div className="text-white "></div>
            ) : (
                <div>
                    {/* <Styles  project={projectDetails}/> */}
                    <AboutTheBrand project={projectDetails}/>
                    <CollMoodboard project={projectDetails}/>
                    
                </div>
              )}
            </main>
        </>
    )
}

export default SmartBrief
