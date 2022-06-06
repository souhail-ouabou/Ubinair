import React from 'react'
import './SmartBrief.css'
import AboutTheBrand from './AboutTheBrand'
import CollMoodboard from './CollMoodboard'

const SmartBrief = ({ indexPage }) => {
    return (
        <>
            <main className={indexPage === 3 ? ' flex-1  pb-8  mt-14 ' : 'hidden'} >
                <div>
                    <AboutTheBrand/>
                    <CollMoodboard/>
                </div>
            </main>
        </>
    )
}

export default SmartBrief
