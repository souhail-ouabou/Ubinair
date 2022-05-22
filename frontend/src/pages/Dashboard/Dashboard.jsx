import React, { useState, useEffect } from 'react'
import Logo from '../../img/Logo.png'
import { FaThLarge } from 'react-icons/fa'

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
import { useSelector, useDispatch } from 'react-redux'
import {
    Getprojectdetails,
    UpdateProject,
} from '../../redux/actions/projectActions'
import { useParams } from 'react-router-dom'

const Dashboard = ({ match }) => {
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

    const percentage = 66
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
            estimatedState: p.estimatedState
        }))
      
        dispatch(UpdateProject(testarr))
        dispatch(Getprojectdetails(id))
    }
    const handleTaskDelete = (task) => {
        const conf = window.confirm('Are you sure about ' + task.name + ' ?')
        if (conf) {
            setTaskss(taskss.filter((t) => t.id !== task.id))
        }
        return conf
    }
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
            estimatedState: p.estimatedState
        }))
      
        dispatch(UpdateProject(testarr))
        dispatch(Getprojectdetails(id))

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

    const initialtaskState = {
        start: new Date('2022-07-20T18:42:02.483+00:00'),
        end: new Date('2022-07-30T18:42:02.483+00:00'),
        name: 'projectDetails.name',
        id: 'projectDetails._id',
        progress: 0,
        type: 'project',
    }

    const [taskss, setTaskss] = useState([initialtaskState])

    useEffect(() => {
        if (user.client) {
            dispatch(Getprojectdetails(id))
        }
    }, [user.client])
    useEffect(() => {
        if (projectDetails.devis) {
            const testarr = projectDetails.specification.map((p) => ({
                start: new Date(p.startDate),
                end: new Date(p.endDate),
                name: p.title,
                id: p._id,
                progress: p.progresState,
                estimatedState :p.estimatedState,
                type: 'task',
                project: projectDetails._id,
            }))
            console.log('testarr', testarr)
            setTaskss([
                {
                    start: new Date(projectDetails.createdAt),
                    end: new Date(projectDetails.finishedAt),
                    name: projectDetails.name,
                    progress: projectDetails.totalProgresState,
                    id: projectDetails._id,
                    type: 'project',
                },
                ...testarr,
            ])
        }
    }, [projectDetails.name])

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

            {loadingProjectDetails ? (
                <div className="col-right text-white w-[130px]">
                    Loaaading ...
                </div>
            ) : (
                <main class="flex-1 pb-8 glass mt-14  ">
                    <top className="flex  items-center justify-center gap-12">
                        <>
                            {projectDetails.specification.map((p) => (
                                <div
                                    key={p._id}
                                    class="flex flex-col gap-4 justify-center items-center "
                                >
                                    <div>
                                        <h1 class="text-2xl font-semibold leading-relaxed text-slate-100">
                                            {p.title}
                                        </h1>
                                    </div>
                                    <div style={{ width: 200, height: 200 }}>
                                        <CircularProgressbarWithChildren
                                            value={p.estimatedState}
                                            text={`${p.progresState}%`}
                                            styles={buildStyles({
                                                pathColor: '#f00',
                                                trailColor: '#eee', //trans
                                                strokeLinecap: 'rounded',

                                                textSize: '16px',

                                                // How long animation takes to go from one percentage to another, in seconds
                                                pathTransitionDuration: 0.5,
                                            })}
                                        >
                                            {/* Foreground path */}
                                            <CircularProgressbar
                                                value={p.progresState}
                                                styles={buildStyles({
                                                    trailColor: 'transparent',
                                                    strokeLinecap: 'rounded',
                                                    pathColor: `rgba(99, 99, 199, ${
                                                        percentage / 10
                                                    })`,
                                                })}
                                            />
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                            ))}

                            <div class="flex flex-col gap-4 justify-center items-center bg-white shadow-md  p-2 rounded-xl w-2/6 ml-auto">
                                <div>
                                    <h1 class="text-2xl font-semibold leading-relaxed ">
                                        Total
                                    </h1>
                                </div>

                                <ProgressBar
                                    done={projectDetails.totalProgresState}
                                />
                            </div>
                        </>
                    </top>
                    <bottom className="flex items-start justify-start gap-12">
                        <div style={{ width: 700, height: 500 }}>
                            <ViewSwitcher
                                onViewModeChange={(viewMode) =>
                                    setView(viewMode)
                                }
                                onViewListChange={setIsChecked}
                                isChecked={isChecked}
                            />

                            <>
                                {loadingProjectDetails ? (
                                    <div className="col-right text-white">
                                        {' '}
                                        Loaaading ...
                                    </div>
                                ) : error ? (
                                    <div>errorMyProjects</div>
                                ) : (
                                    <>
                                        <Gantt
                                            tasks={taskss}
                                            viewMode={view}
                                            {...(isAdmin && {
                                                onDateChange: handleTaskChange,
                                            })}
                                            onDelete={handleTaskDelete}
                                            onProgressChange={
                                                handleProgressChange
                                            }
                                            onDoubleClick={handleDblClick}
                                            onSelect={handleSelect}
                                            onExpanderClick={
                                                handleExpanderClick
                                            }
                                            listCellWidth={
                                                isChecked ? '155px' : ''
                                            }
                                            columnWidth={columnWidth}
                                            TooltipContent="false"
                                            TaskListTable="false"
                                            TaskListHeader="false"
                                        />
                                    </>
                                )}
                            </>
                        </div>

                        <TodoList isAdmin={isAdmin} />
                    </bottom>
                </main>
            )}
        </div>
    )
}

export default Dashboard
