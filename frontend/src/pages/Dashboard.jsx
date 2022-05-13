import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'
import OverviewIcon from '../icons/overview.svg'
import ShoppingBagIcon from '../icons/shopping-bag.svg'
import GraphIcon from '../icons/graph.svg'
import CalendarIcon from '../icons/calendar.svg'
import WalletIcon from '../icons/wallet.svg'
import FileIcon from '../icons/file.svg'
import ChatIcon from '../icons/chat.svg'
import GroupChatIcon from '../icons/group-chat.svg'
import SettingsIcon from '../icons/settings.svg'
import LogoutIcon from '../icons/logout.svg'
import PlusIcon from '../icons/plus.svg'
import LayersIcon from '../icons/layers.svg'
import DraftIcon from '../icons/draft.svg'
import InvisibleIcon from '../icons/invisible.svg'
import RejectedIcon from '../icons/rejected.svg'
import MailIcon from '../icons/mail.svg'
import FilterIcon from '../icons/filter.svg'
import FigmaIcon from '../icons/figma.svg'
import SketchIcon from '../icons/sketch.svg'
import AIIcon from '../icons/ai.svg'
import PencilIcon from '../icons/pencil.svg'
import TrashIcon from '../icons/trash.svg'
import ChevronLeftIcon from '../icons/chevron-left.svg'
import ChevronRightIcon from '../icons/chevron-right.svg'
import { FaThLarge, FaPhone, FaArrowRight } from 'react-icons/fa'
import {
    Gantt,
    Task,
    EventOption,
    StylingOption,
    ViewMode,
    DisplayOption,
} from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import RadialSeparators from './RadialSeparators'
import ProgressBar from '../components/ProgressBar/ProgressBar'

const Dashboard = () => {
    const percentage = 66
    let tasks = [
        {
            start: new Date(2020, 1, 1),
            end: new Date(2020, 1, 2),
            name: 'Idea',
            id: 'Task 0',
            type: 'task',
            progress: 45,
            isDisabled: true,
            styles: {
                progressColor: '#ffbb54',
                progressSelectedColor: '#ff9e0d',
            },
        },
        {
            start: new Date(2020, 1, 4),
            end: new Date(2020, 1, 21),
            name: 'Idea',
            id: 'Task 0',
            type: 'task',
            progress: 89,
            isDisabled: true,
            styles: {
                progressColor: '#ffbb54',
                progressSelectedColor: '#ff9e0d',
            },
        },
    ]
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
                <circles className="flex items-center justify-center gap-12">
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
                    <div class=" flex flex-col gap-4 justify-center items-center">
                        <div>
                            <h1 class="text-2xl font-semibold leading-relaxed text-slate-100">
                                Total
                            </h1>
                        </div>
                        <ProgressBar done="30" />
                    </div>
                </circles>
                <div className='mt-20' style={{ width: 900, height: 200 }}>
                    <Gantt
                        tasks={tasks}
                        TaskListTable="false"
                        TaskListHeader="false"
                        TooltipContent="false"
                    />
                </div>
            </main>
        </div>
    )
}

export default Dashboard
