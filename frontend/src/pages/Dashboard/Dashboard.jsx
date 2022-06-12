import React, { useState, useEffect } from 'react'

import { FaThLarge } from 'react-icons/fa'

import { ViewMode, Gantt } from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { getStartEndDateForProject, initTasks } from './Gantt/helper'
import { ViewSwitcher } from './Gantt/view-switcher'
import TodoList from './TodoList/TodoList'


import { useSelector, useDispatch } from 'react-redux'
import {
    Getprojectdetails,
    UpdateProject,
} from '../../redux/actions/projectActions'
import { useParams } from 'react-router-dom'
import {
    PROJECT_DETAILS_RESET,
    PROJET_UPDATE_RESET,
} from '../../redux/actions/constants/projetconstants'

import SideBar from './side/SideBar'
import Overview from './Overview'
import Tracker from './Tracker'
import SmartBrief from './SmartBrief'
import ContentSharing from './ContentSharing'

const Dashboard = () => {
const [pageIndex,setPageX]=React.useState()
const [OverviewPage,setOverPage]=React.useState('hidden')
const [trackerPage,setTrackPage]=React.useState('hidden')
const [briefPage,setBriefPage]=React.useState('hidden')
const [contentPage,setContentPage]=React.useState('hidden')
const showPage=(i)=>{


    if(i==1){

        setBriefPage('hidden')
        setTrackPage('hidden')
        setContentPage('hidden')
        setOverPage('')
        
        
        // setTasks(tasksDesign)
   }else if(i==2){

    setOverPage('hidden')
    setBriefPage('hidden')
    setContentPage('hidden')
    setTrackPage('')
     
        // setTasks(tasksContent)
   
}else if(i==3){

    setOverPage('hidden')
    setTrackPage('hidden')
    setContentPage('hidden')
    setBriefPage('')
     
        // setTasks(tasksContent)
   }else if(i==4){
    setOverPage('hidden')
    setTrackPage('hidden')
    setBriefPage('hidden')
    setContentPage('')
   }
}

    return (
        <>
            <div className="w-full min-h-screen flex z-10 ">
           
            <SideBar showPage={(x)=>showPage(x)} />
             <Overview state={OverviewPage}/>
          < Tracker state={trackerPage} />
          <SmartBrief state={briefPage} />
          <ContentSharing state={contentPage} />


        
          
           
       

            </div>
        </>
    )
}

export default Dashboard



