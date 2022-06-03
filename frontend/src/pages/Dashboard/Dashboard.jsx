import React, { useState } from 'react'

import SideBar from './side/SideBar'
import Overview from './Overview'
import Tracker from './Tracker'
import SmartBrief from './SmartBrief/ProjetRecap'

const Dashboard = () => {
    // const [OverviewPage, setOverPage] = useState('')
    // const [trackerPage, setTrackPage] = useState('hidden')
    const [indexPage, setIndexPage] = useState(1)

    const showPage = (i) => {
        // if (i == 1) {
        //     // setOverPage('')
        //     // setTrackPage('hidden')

        //     setIndexPage(i)

        //     // setTasks(tasksDesign)
        // } else if (i == 2) {
        //     setIndexPage(i)
        //     // setOverPage('hidden')
        //     // setTrackPage('')

        //     // setTasks(tasksContent)
        // }

        switch (i) {
            case 1:
                setIndexPage(i)
                break
            case 2:
                setIndexPage(i)
                break
            case 3:
                setIndexPage(i)
                break
            default:
                break
        }
    }

    return (
        <>
            <div className="w-full min-h-screen flex flex-row gap-3 z-10 ">
                <SideBar showPage={(x) => showPage(x)} />
                <Overview /*state={OverviewPage} */ indexPage={indexPage} />
                <Tracker /*state={trackerPage}*/ indexPage={indexPage} />
                <SmartBrief /*state={trackerPage}*/ indexPage={indexPage} />
            </div>
        </>
    )
}

export default Dashboard
