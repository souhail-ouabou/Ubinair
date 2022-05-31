import React, { useState, useEffect } from 'react'

import { FaThLarge } from 'react-icons/fa'

import { ViewMode, Gantt } from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'

import 'react-toastify/dist/ReactToastify.css'
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { getStartEndDateForProject } from './Gantt/helper'
import { ViewSwitcher } from './Gantt/view-switcher'
import TodoList from './TodoList/TodoList'


import { useSelector, useDispatch } from 'react-redux'
import {
    Getprojectdetails,
    UpdateProject,
} from '../../redux/actions/projectActions'
import { useParams } from 'react-router-dom'

import { PROJET_UPDATE_RESET } from '../../redux/actions/constants/projetConstants'

const Dashboard = () => {
    /*Get project details */
    const dispatch = useDispatch()
    const { id } = useParams()
    const GetProjectDetailsReducer = useSelector(
        (state) => state.GetProjectDetailsReducer
    )
    const {
        project: projectDetails,
        loading: loadingProjectDetails,
        error,
    } = GetProjectDetailsReducer

    const getUserReducer = useSelector((state) => state.getUserReducer)
    const { loading, user, isAdmin } = getUserReducer

    const projectUpdateReducer = useSelector(
        (state) => state.projectUpdateReducer
    )
    const { success: successUpdate, loading: loadingProjectUpdate } =
        projectUpdateReducer

    const [view, setView] = useState(ViewMode.Day)
    // const [tasks, setTasks] = useState(initTasks())
    const [isChecked, setIsChecked] = useState(true)
    let columnWidth = 60
    if (view === ViewMode.Month) {
        columnWidth = 300
    } else if (view === ViewMode.Week) {
        columnWidth = 250
    }

    const handleTaskChange = (task) => {
        console.log('On date change Id:' + task.id)
        let newTasks = taskss.map((t) => (t.id === task.id ? task : t))
        if (task.project) {
            const [start, end] = getStartEndDateForProject(
                newTasks,
                task.project
            )
            const project =
                newTasks[newTasks.findIndex((t) => t.id === task.project)]
            if (
                project.start.getTime() !== start.getTime() ||
                project.end.getTime() !== end.getTime()
            ) {
                const changedProject = { ...project, start, end }
                newTasks = newTasks.map((t) =>
                    t.id === task.project ? changedProject : t
                )
            }
        }

        setTaskss(newTasks)
        console.log(newTasks)
        const testarr = newTasks.map((p) => ({
            _id: p.id,
            title: p.name,
            startDate: p.start,
            endDate: p.end,
            progresState: p.progress,
            estimatedState: p.estimatedState,
        }))

        dispatch(UpdateProject(testarr))
    }
    // const handleTaskDelete = (task) => {
    //     const conf = window.confirm('Are you sure about ' + task.name + ' ?')
    //     if (conf) {
    //         setTaskss(taskss.filter((t) => t.id !== task.id))
    //     }
    //     return conf
    // }
    const handleProgressChange = async (task) => {
        const newTasks = taskss.map((t) => (t.id === task.id ? task : t))
        setTaskss(newTasks)
        console.log('On progress change Id:' + task.id)
        const testarr = newTasks.map((p) => ({
            _id: p.id,
            title: p.name,
            startDate: p.start,
            endDate: p.end,
            progresState: p.progress,
            estimatedState: p.estimatedState,
        }))

        dispatch(UpdateProject(testarr))
    }
    const handleDblClick = (task) => {
        alert('On Double Click event Id:' + task.id)
    }
    const handleSelect = (task, isSelected) => {
        console.log(
            task.name + ' has ' + (isSelected ? 'selected' : 'unselected')
        )
    }
    const handleExpanderClick = (task) => {
        setTaskss(taskss.map((t) => (t.id === task.id ? task : t)))
        console.log('On expander click Id:' + task.id)
    }


import SideBar from './side/SideBar'
import Overview from './Overview'
import Tracker from './Tracker'

const Dashboard = () => {
const [pageIndex,setPageX]=React.useState(1)
const [OverviewPage,setOverPage]=React.useState('')
const [trackerPage,setTrackPage]=React.useState('hidden')

const showPage=(i)=>{


    if(i==1){
        
        setOverPage('')
        setTrackPage('hidden')
        
        // setTasks(tasksDesign)
   }else if(i==2){

    setOverPage('hidden')
    setTrackPage('')
     
        // setTasks(tasksContent)
   }
}

    return (
        <>
            <div className="w-full min-h-screen flex z-10 ">

           
            <SideBar showPage={(x)=>showPage(x)} />
             <Overview state={OverviewPage}/>
          < Tracker state={trackerPage} />


            </div>
        </>
    )
}

export default Dashboard



