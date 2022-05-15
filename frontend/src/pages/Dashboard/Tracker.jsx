import React, { useState } from 'react'
import Logo from '../../img/Logo.png'
import { FaThLarge } from 'react-icons/fa'
import { ViewMode, Gantt } from 'gantt-task-react'
import {motion}  from 'framer-motion'
import 'gantt-task-react/dist/index.css'
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { getStartEndDateForProject, initTasks } from './helper'
import { ViewSwitcher } from './view-switcher'


const Dashboard = () => {
    const percentage=60;
    const [title,setTitle]=React.useState('')
    const today= new Date();
    const [view, setView] = React.useState(ViewMode.Day)
    const [design, setDesign] = React.useState(false)
    const [content, setTContent] = React.useState(false)
    const [inte, setInte] = React.useState(false)


   const handleClickShow=(index)=>{
        setTContent(false)
        setInte(false)
        setDesign(false)

        if(index==1){
            setDesign(true)
            setTitle('Design')
       }else if(index==2){
            setTContent(true)
            setTitle('Content')
       }else{
            setInte(true)
            setTitle('Integration')
           
            
       }

    }
    const handleClickContent=()=>{
        setTContent(true)
        setInte(false)
        setDesign(false)
    }
    const handleClickInte=()=>{
        setTContent(false)
        setInte(true)
        setDesign(false)
    }

    let columnWidth = 60
    if (view === ViewMode.Month) {
        columnWidth = 300
    } else if (view === ViewMode.Week) {
        columnWidth = 250
    }

   
    
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
                <top className="flex gap-4 w-[1000px]">
                <div class="flex flex-row justify-between w-3/4 text-white pt-20 pr-10"> 
                 <div class="text-3xl font-semibold leading-relaxed text-slate-100">
                     {
                     title
                     }
                 </div>
                 <div class="text-2xl font-semibold leading-relaxed text-slate-100 pt-2">
                    {design||content||inte?
                    new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit"
                    }).format(today):''}
                 </div>
                </div>
                    <div class=" flex flex-col gap-4 justify-center items-center shadow-box-sh w-1/4  p-6 rounded-xl mt-10">
                      
                    <ul className="flex flex-col gap-y-4 pt-7 cursor-pointer">
                    <li>
                        <motion.div className="flex gap-x-4 items-center py-3 text-white hover:text-indigo-600 group rounded-lg   pl-4 pr-4"
                             whileHover={{
                                boxShadow:"0px 0px 8px rgb(255,255,255)"
                            }}
                               transition={{duration:0.2}}
                               onClick={()=>handleClickShow(1)}
                               >
                              
                        <div>
                       
                            <h1 class="text-xl font-semibold leading-relaxed text-slate-100">
                                Design
                            </h1>
                           
                        </div>
                        <div class="ml-10" style={{ width: 50, height: 50 }}>
                            <CircularProgressbarWithChildren
                                value={50}
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
                        </motion.div>
                        
                    </li>
                    <li>
                        <motion.div className="flex  gap-x-4 items-center py-3 text-white hover:text-indigo-600 group rounded-lg pl-4 pr-4"
                         whileHover={{
                            boxShadow:"0px 0px 8px rgb(255,255,255)"
                        }}
                           transition={{duration:0.2}}
                           onClick={()=>handleClickShow(2)}>
                        <div>
                            <h1 class="text-xl font-semibold leading-relaxed text-slate-100">
                                Content
                            </h1>
                        </div>
                 
                        <div class="ml-7" style={{ width: 50, height: 50 }}>
                            <CircularProgressbarWithChildren
                                value={80}
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
                        </motion.div>
                    </li>

                    <li>
                        <motion.div className="flex gap-x-4 items-center py-3 text-white hover:text-indigo-600 group rounded-lg pl-4 pr-4"
                         whileHover={{
                            boxShadow:"0px 0px 8px rgb(255,255,255)"
                        }}
                           transition={{duration:0.2}}
                           onClick={()=>handleClickShow(3)}>
                        <div>
                            <h1 class="text-xl font-semibold leading-relaxed text-slate-100">
                                Integration
                            </h1>
                        </div>
                        <div style={{ width: 50, height: 50 }}>
                            <CircularProgressbarWithChildren
                                value={80}
                               
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
                        </motion.div>
                    </li>
                    {design?<>
                    <hr/>
                    <li class="m-auto">
                    <div style={{ width: 150, height: 150 }}>
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
                    </li>
                    </>:<></>
                    }

                 {content?<>
                    <hr/>
                    <li class="m-auto">
                    <div style={{ width: 150, height: 150 }}>
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
                   
                    </li>
                    </>:<></>
                    }

                 {inte?<>
                    <hr/>
                    <li class="m-auto">
                    <div style={{ width: 150, height: 150 }}>
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
                    </li>
                    </>:<></>
                    }
                   </ul>

                    </div>
                </top>
                
                <bottom className="flex items-center justify-center gap-12">

           
                            
                  
                       
                </bottom>
            </main>
        </div>
    )
}

export default Dashboard