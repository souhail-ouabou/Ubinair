import React, { useState,useEffect } from 'react'
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
import { getStartEndDateForProject, initTasks } from './Gantt/helper'
import { ViewSwitcher } from './Gantt/view-switcher'


const Dashboard = () => {
    const percentage=60;

    const tasksDesign=[{title:"Start Design",state:-1,date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date())},{title:"Add nav bar",state:0,date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date())},
    {title:"Add footer",state:1,date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date())}]

    
    const tasksContent=[{title:"Start Content",state:0,date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date())},
    {title:"Add Articles",state:-1,date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date())},
    {title:"Add topics",state:1,date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date())}]

    const tasksInte=[{title:"Start integration",state:1,date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date())},
    {title:"Test alfa and beta",state:1,date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date()),type:'Design'},
    {title:"Version final",state:-1,date:new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date()),type:'Design'}]

    const [tasks, setTasks] = useState([]);
   console.log('hh'+new Date());
   
    const test=()=>{
    // const newtasks=tasks.concat({title:"NewJuice",state:0,date:"newDate"})
    // setTasks(newtasks)
    }

    let changeState=(index=0) => {
        console.log('index'+index)
         console.log(JSON.stringify(tasks));
            let newState
            let newArr = tasks.map((item, i) => {
                console.log('index2'+i)
             if(index==i){
                 if(item.state==-1){
                    newState=0
                 }else if(item.state==0){
                    newState=1
                 }else if(item.state==1){
                    newState=-1;
                 }
                 console.log('newState'+newState+'i'+i)
                return { ...item,state:newState };
            
             }else{
                 return item;
             }
             
            });
            console.log('newarr',JSON.stringify(newArr))
            setTasks(newArr);
            console.log(JSON.stringify(tasks));
          };

        // let newArr = [...tasks]; // copying the old datas array
        // console.log(newArr[0][state]+"lowlhhjjjjjjjjjjjjjjjjjjjjjj");
        // newArr[index][1] = -1;
        // console.log(newArr[index][1]+"hhjjjjjjjjjjjjjjjjjjjjjj");
        // setTasks(newArr);   
    

    // useEffect(()=>{
       
    // },[])
    //  setTasks({...tasks,...newtask})   

  
    // console.log(JSON.stringify(task));
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
            setTasks(tasksDesign)
       }else if(index==2){
            setTContent(true)
            setTitle('Content')
            setTasks(tasksContent)
       }else{
            setInte(true)
            setTitle('Integration')
            setTasks(tasksInte)
           
            
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
            <main class="flex-1 pb-8 glass mt-14">
                <top className="flex gap-4 w-[1000px]">
                <div class="flex flex-row flex-wrap justify-between w-3/4 text-white pt-20 pr-10"> 
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
                
                 <div class="flex  mb-36">
                
                 
                        <div class="">
                        {design||content||inte?
                            <table class="w-[700px]  shadow-box-sh"
                            onClick={test}>
                                <thead class="text-xl bg-gray-200 ">
                       <tr>
                            <th class="px-6 py-2 text-gray-500 text-left w-[250px]">
                                Task List
                            </th>
                            <th class="px-6 py-2 text-gray-500  w-[200px] ">
                                Status
                            </th>
                            <th class="px-6 py-2 pr-4 text-gray-500">
                               Date
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody class="text-xl bg-white text-center">
                    {tasks.map((taskObj,index)=>(
               
                        <tr  key={index} class="whitespace-nowrap">
                            <td class="px-6 py-4 text-gray-500 text-left">
                                {taskObj.title}
                            </td>

                            <td class="px-6 py-4 ">
                            
                                <div class=" text-gray-900">
                                {taskObj.state==1 &&
                                    <button type="button" class="inline-block px-4 py-2 bg-green-500
                                    text-white font-medium text-sm leading-tight  rounded-full
                                    shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 
                                    focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700
                                    active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={()=>changeState(index)}>Done</button>
                               }

                              {taskObj.state==-1 &&
                                   <button type="button" class="inline-block px-4 py-2 bg-yellow-500 
                                   text-white font-medium text-sm leading-tight  rounded-full 
                                   shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600
                                    focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700
                                     active:shadow-lg transition duration-150 ease-in-out"
                                     onClick={()=>changeState(index)}>In progress</button>
                              }

                              {taskObj.state==0 &&
                                   <button type="button" class="inline-block px-4 py-2 bg-red-600
                                    text-white font-medium text-sm leading-tight  rounded-full
                                     shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 
                                     focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800
                                      active:shadow-lg transition duration-150 ease-in-out"
                                      onClick={()=>changeState(index)}>Not yet</button>
                             }
                           
                                </div>
                           </td>
                     
                            <td class="px-6 py-4 text-gray-900 text-center">
                            {taskObj.date}
                                {/* <a href="#" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">Edit</a> */}
                            </td>
                     
                        </tr>

                        ))}
                          </tbody>
                        </table>
                        :''}
                     </div>
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