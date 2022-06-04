//this was a dash
import React, { useState, useEffect } from 'react'
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
import { PROJET_UPDATE_RESET } from '../../redux/actions/constants/projetconstants'

export default function Overview({ indexPage }) {
    /*Get project details */
    const dispatch = useDispatch()
    const { id } = useParams()

    const GetProjectDetailsReducer = useSelector(
        (state) => state.GetProjectDetailsReducer
    )
    const auth = useSelector((state) => state.auth)
    const {
        project: projectDetails,
        loading: loadingProjectDetails,
        error,
    } = GetProjectDetailsReducer
    const { userInfo } = auth

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

    const initialtaskState = {
        start: new Date('2022-07-20T18:42:02.483+00:00'),
        end: new Date('2022-07-30T18:42:02.483+00:00'),
        name: '',
        id: '',
        progress: 0,
        type: 'project',
    }

    const [taskss, setTaskss] = useState([initialtaskState])
    const [clientTaskss, setclientTaskss] = useState([
        {
            id: '',
            text: 'teeeeest',
            isCompleted: false,
        },
    ])

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PROJET_UPDATE_RESET })
            // dispatch({ type: PROJECT_DETAILS_RESET })
            console.log('successUpdate')
        } else {
            if (user.client || isAdmin) {
                dispatch(Getprojectdetails(id))
            }
        }
    }, [dispatch, id, user.client])
    useEffect(() => {
        if (projectDetails.devis) {
            const testarr = projectDetails.specification.map((p) => ({
                start: new Date(p.startDate),
                end: new Date(p.endDate),
                name: p.title,
                id: p._id,
                progress: p.progresState,
                estimatedState: p.estimatedState,
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
            setclientTaskss(projectDetails.clientTaskss)
        }
    }, [
        projectDetails.name,
        clientTaskss,
        projectDetails.devis,
        projectDetails.specification,
        projectDetails.createdAt,
        projectDetails.finishedAt,
        projectDetails.totalProgresState,
        projectDetails._id,
        projectDetails.clientTaskss,
    ])

    return (
        <>
            {loadingProjectDetails || loading ? (
                <div className=" text-white ">Loaaading ...</div>
            ) : projectDetails.specification?.length === 0 ? (
                <div className="text-white "></div>
            ) : (
                <main
                    className={
                        indexPage === 1 ? ' flex-1  pb-8  mt-14 ' : 'hidden'
                    }
                >
                    <top className="flex  items-center justify-center gap-7 h-[272px] ">
                        <div className="glass flex flex-row gap-4 h-full">
                            {projectDetails.specification?.map((p) => (
                                <div
                                    key={p._id}
                                    className="flex flex-col gap-4 justify-center items-center"
                                >
                                    <>
                                        <h1 class="text-2xl font-semibold leading-relaxed text-slate-100">
                                            {p.title}
                                        </h1>
                                    </>
                                    <div style={{ width: 190, height: 200 }}>
                                        <CircularProgressbarWithChildren
                                            value={p.estimatedState}
                                            text={`${p.progresState.toFixed(
                                                0
                                            )}%`}
                                            styles={buildStyles({
                                                pathColor: '#E1341E', //estimated #B8C2CC
                                                trailColor: '#FFFFFF', //trans
                                                strokeLinecap: 'rounded',
                                                textSize: '16px',
                                                textColor: '#eee',
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
                                                    pathColor: '#6363C7',
                                                })}
                                            />
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center glass   px-6  w-2/6 h-full">
                            <div>
                                <h1 class="text-3xl text-slate-100 font-semibold leading-relaxed ">
                                    Total
                                </h1>
                            </div>
                            <ProgressBar
                                done={projectDetails.totalProgresState}
                            />
                        </div>
                    </top>
                    {loadingProjectDetails ? (
                        <div className="col-right text-white">
                            {' '}
                            Loaaading ...
                        </div>
                    ) : error ? (
                        <div>errorMyProjects</div>
                    ) : (
                        <bottom className="flex items-start justify-start gap-12">
                            <div style={{ width: 720, height: 500 }}>
                                <ViewSwitcher
                                    onViewModeChange={(viewMode) =>
                                        setView(viewMode)
                                    }
                                    onViewListChange={setIsChecked}
                                    isChecked={isChecked}
                                />
                                <div className="bg-white shadow-md  p-2 rounded-xl ">
                                    <Gantt
                                        // barBackgroundColor="text-red-200"
                                        todayColor="yellow"
                                        barProgressColor="#6363C7"
                                        barCornerRadius="12"
                                        tasks={taskss}
                                        viewMode={view}
                                        {...(isAdmin && {
                                            onDateChange: handleTaskChange,
                                        })}
                                        // onDelete={handleTaskDelete}
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
                            </div>
                            <TodoList
                                isAdmin={isAdmin}
                                id={id}
                                taskss={projectDetails.clientTaskss}
                            />
                        </bottom>
                    )}
                </main>
            )}
        </>
    )
}
