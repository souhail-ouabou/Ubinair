import React, { useState } from 'react'
import Logo from '../../img/Logo.png'
import { FaThLarge } from 'react-icons/fa'
// import Todolist from './TodoList'

import { ViewMode, Gantt } from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'
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

// const Dashboard = () =>
// const tasks=[];
// class Dashboard extends React.Component
const Dashboard = () => {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         tasks:[],
    //     }
    // }

    // createTask=(task)=>{
    // if(task.trim()==='')
    // {
    //     alert('task cant be empty')
    //     return;
    // }
    // tasks.push({task,isChecked:false})
    // this.setState({tasks:tasks})

    // }
    //   toggleTask=(taskId)=>{
    //       const taskItem=tasks[taskId];
    //       taskItem.isChecked=!taskItem.isChecked;
    //       this.setState({tasks:tasks})
    //   }
    // deleteTask=(taskId)=>{
    //     tasks.splice(taskId,1)
    //     this.setState({tasks:tasks})
    // }

    // editTask=(taskId,task)=>{
    //  const taskItem=tasks[taskId]
    //  taskItem.task=task;
    //  this.setState({tasks:tasks})
    // }
    const percentage = 66
    const [view, setView] = React.useState(ViewMode.Day)
    const [tasks, setTasks] = React.useState(initTasks())
    const [isChecked, setIsChecked] = React.useState(true)
    let columnWidth = 60
    if (view === ViewMode.Month) {
        columnWidth = 300
    } else if (view === ViewMode.Week) {
        columnWidth = 250
    }

    const handleTaskChange = (task) => {
        console.log('On date change Id:' + task.id)
        let newTasks = tasks.map((t) => (t.id === task.id ? task : t))
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
        setTasks(newTasks)
    }
    const handleTaskDelete = (task) => {
        const conf = window.confirm('Are you sure about ' + task.name + ' ?')
        if (conf) {
            setTasks(tasks.filter((t) => t.id !== task.id))
        }
        return conf
    }
    const handleProgressChange = async (task) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
        console.log('On progress change Id:' + task.id)
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
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
        console.log('On expander click Id:' + task.id)
    }
    // render(){
    return (
        <div className="w-full min-h-screen flex ">
            <aside className=" py-6 px-10 w-64 mr-10 mt-14 glass  ">
                <img
                    className="w-16 object-cover m-auto "
                    src={Logo}
                    alt="Logo"
                />{' '}
                <ul className="flex flex-col gap-y-6 pt-7">
                    <li>
                        <div className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group">
                            <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />

                            <FaThLarge />
                            <span>Project</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group">
                            <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                            <FaThLarge />
                            <span>Project</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group">
                            <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                            <FaThLarge />
                            <span>Project</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group">
                            <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                            <FaThLarge />
                            <span>Project</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group">
                            <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                            <FaThLarge />
                            <span>Project</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group">
                            <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                            <FaThLarge />
                            <span>Project</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group">
                            <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                            <FaThLarge />
                            <span>Project</span>
                        </div>
                    </li>
                </ul>
            </aside>
            <main class="flex-1 pb-8 glass mt-14  ">
                <top className="flex items-center justify-center gap-12">
                    <div class=" flex flex-col gap-4 justify-center items-center "> 
                    
                        <div>
                            <h1 class="text-2xl font-semibold leading-relaxed text-slate-100">
                                Design
                            </h1>
                        </div>
                        <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbarWithChildren
                                value={50}
                                text={`50%`}
                                styles={buildStyles({
                                    pathColor: '#f00',
                                    trailColor: '#eee',
                                    strokeLinecap: 'butt',

                                    textSize: '16px',

                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,
                                })}
                            >
                                {/* Foreground path */}
                                <CircularProgressbar
                                    value={50}
                                    styles={buildStyles({
                                        trailColor: 'transparent',
                                        strokeLinecap: 'butt',
                                        pathColor: `rgba(99, 99, 199, ${
                                            percentage / 10
                                        })`,
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                    <div class=" flex flex-col gap-4 justify-center items-center">
                        <div>
                            <h1 class="text-2xl font-semibold leading-relaxed text-slate-100">
                                Content
                            </h1>
                        </div>
                        <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbarWithChildren
                                value={80}
                                text={`70%`}
                                styles={buildStyles({
                                    pathColor: '#f00',
                                    trailColor: '#eee',
                                    strokeLinecap: 'butt',

                                    textSize: '16px',

                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,
                                })}
                            >
                                {/* Foreground path */}
                                <CircularProgressbar
                                    value={70}
                                    styles={buildStyles({
                                        trailColor: 'transparent',
                                        strokeLinecap: 'butt',

                                        pathColor: `rgba(99, 99, 199, ${
                                            percentage / 10
                                        })`,
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                    <div class=" flex flex-col gap-4 justify-center items-center">
                        <div>
                            <h1 class="text-2xl font-semibold leading-relaxed text-slate-100">
                                Integration
                            </h1>
                        </div>
                        <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbarWithChildren
                                value={80}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    pathColor: '#f00',
                                    trailColor: '#eee',

                                    textSize: '16px',

                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,
                                })}
                            >
                                {/* Foreground path */}
                                <CircularProgressbar
                                    value={70}
                                    styles={buildStyles({
                                        trailColor: 'transparent',
                                        strokeLinecap: 'round',
                                        pathColor: `rgba(99, 99, 199, ${
                                            percentage / 10
                                        })`,
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                    <div class=" flex flex-col gap-4 justify-center items-center bg-white shadow-md w-2/5 p-6 rounded-xl">
                        <div>
                            <h1 class="text-2xl font-semibold leading-relaxed ">
                                Total
                            </h1>
                        </div>
                        <ProgressBar done="30" />
                    </div>
                </top>
                <bottom className="flex items-start justify-start gap-12">

                <div style={{ width: 700, height: 500 }}>
                    <ViewSwitcher
                        onViewModeChange={(viewMode) => setView(viewMode)}
                        onViewListChange={setIsChecked}
                        isChecked={isChecked}
                    />
                    <Gantt
                        tasks={tasks}
                        viewMode={view}
                        onDateChange={handleTaskChange}
                        onDelete={handleTaskDelete}
                        onProgressChange={handleProgressChange}
                        onDoubleClick={handleDblClick}
                        onSelect={handleSelect}
                        onExpanderClick={handleExpanderClick}
                        listCellWidth={isChecked ? '155px' : ''}
                        columnWidth={columnWidth}
                        TooltipContent="false"
                        TaskListTable="false"
                        TaskListHeader="false"
                    />
                </div>
           
                            <TodoList  />
                  
                       
                </bottom>
            </main>
        </div>
    )
}

export default Dashboard
