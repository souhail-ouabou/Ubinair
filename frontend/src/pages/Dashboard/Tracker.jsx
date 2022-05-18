import React, { useState,useEffect } from 'react'
import Logo from '../../img/Logo.png'
import { FaThLarge } from 'react-icons/fa'
import { ViewMode, Gantt } from 'gantt-task-react'
import {motion}  from 'framer-motion'
import 'gantt-task-react/dist/index.css'
import { FiEdit2 } from 'react-icons/fi'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'




const Tracker = () => {
    const percentage=60;
    const [addedTaskTitle,setAddedTaskTitle]=useState('')
    const [addedTaskState,setAddedTaskState]=useState('')
    const [addedTaskDate,setAddedTaskDate]=useState('')

    const [EditedTaskTitle,setEditedTaskTitle]=useState('')
    const [EditedTaskState,setEditedTaskState]=useState('')
    const [EditedTaskDate,setEditedTaskDate]=useState('')
    const [EditedTaskid,setEditedTaskid]=useState('')

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
    const [showForm, setShowForm] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
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

   const addbtnHandler=()=>{
        setShowFormUpdate(false)
        setShowForm(!showForm)
        console.log('kan hna'+showForm);
    }

    const editbtnHandler=()=>{
        setShowForm(false)
        setShowFormUpdate(true)
        console.log('kan hna'+showForm);
    }



   const handleSubmit=(e)=>{
       e.preventDefault();
       const newtasks=tasks.concat({title:addedTaskTitle,state:addedTaskState,date:addedTaskDate})
       setTasks(newtasks)
       
       
   }

   const deleteHandle=(title)=>{
    const newtasks=tasks.filter(t=>t.title!==title)
    setTasks(newtasks)
   }

   const editeHandle=(taskObjet,index)=>{
     setEditedTaskTitle(taskObjet.title)
     setEditedTaskState(taskObjet.state)
     setEditedTaskDate(taskObjet.date)
     setEditedTaskid(index)
     editbtnHandler()
   }

   const handleUpdate=(e)=>{
    e.preventDefault();
    setTasks(
        tasks.map((task,index)=>{
            if(index==EditedTaskid){
               return{...task,title:EditedTaskTitle
                ,state:EditedTaskState,date:EditedTaskDate}
            }
            console.log('malgahch'+index);
            return task;

        }
      )
    )
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
                
                 <div class="flex justify-start mb-36">
                
                 
                       
                        {design||content||inte?
                         <div class="">
                            <table class="w-[700px]  shadow-box-sh "
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
                            <th class="px-6 py-2 pr-4 text-gray-500">
                               Action
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody class="text-xl bg-white text-center">
                    {tasks.map((taskObj,index)=>(
               
                        <tr  key={index} class="whitespace-nowrap cursor-pointer"

                         
                          
                          >

                            <td class="px-6 py-4 text-gray-500 text-left"
                            
                             >
                                 
                                 
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

                              {taskObj.state==0 &&
                                   <button type="button" class="inline-block px-4 py-2 bg-yellow-500 
                                   text-white font-medium text-sm leading-tight  rounded-full 
                                   shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600
                                    focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700
                                     active:shadow-lg transition duration-150 ease-in-out"
                                     onClick={()=>changeState(index)}>In progress</button>
                              }

                              {taskObj.state==-1 &&
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

                            <td class="px-6 py-4 text-gray-900 text-center">
                           <Link to="#editForm">
                            <button
                                className="top-3 right-3"
                                type="button"
                                onClick={()=>editeHandle(taskObj,index)}
                           
                            >
                                
                                <FaRegEdit className="text-green-900" />
                            </button>
                            </Link>
                           
                            <button
                                className="top-3 ml-2"
                                type="button"
                                onClick={()=>deleteHandle(taskObj.title)}
                           
                            >
                                
                                <RiDeleteBin6Fill className="text-red-600" />
                            </button>
                        

                            
                                {/* <a href="#" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">Edit</a> */}
                            </td>
                     
                        </tr>

                        ))}
                          </tbody>
                        </table>
                        <Link to="#addForm">
                        <button type="submit" onClick={addbtnHandler} class="text-white
                        rounded-full text-2xl mt-2  px-5 py-2.5 text-center bg-gradient-to-r
                         from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br
                          focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 
                          shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/8">+</button>
                         </Link>
                             
                        {/* <button type="submit" onClick={editbtnHandler} class="text-white
                        rounded-full text-sm mt-2 ml-2  px-5 py-5 text-center bg-gradient-to-r
                         from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br
                          focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 
                          shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/8"><i><FiEdit2/></i></button> */}

                        {showForm?(
                                <div className='bg-white mt-3 px-6 py-6 rounded-lg' id="addForm">
                                <form onSubmit={handleSubmit}>
                                <div class="mb-6">
                                    <label for="task" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New task</label>
                                    <input type="text" id="task" value={addedTaskTitle} onChange={(e)=>setAddedTaskTitle(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Add new task" required/>
                                </div>
                                <div class="mb-6">
                                    <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Task state</label>

                                   
                                    <select type="text" id="state"  value={addedTaskState} onChange={(e)=>setAddedTaskState(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full py-2.5 px-2 focus:outline-none  focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                                   
                                    <option selected>Select the state</option>
                                            <option value="-1">Not yet</option>
                                            <option value="0">In progress</option>
                                            <option value="1">Done</option>
                                    </select>
                                </div>
                                <div class="mb-6">
                                    <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                                    <input type="date" id="date" value={addedTaskDate} onChange={(e)=>setAddedTaskDate(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
                                </div>
                            
                                <button type="submit" class="text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/8">Add task</button>
                                </form>
                                </div>
                           ):null}

                           
                        {showFormUpdate?(
                                <div className='bg-white mt-3 px-6 py-6 rounded-lg' id="editForm">
                                <form onSubmit={handleUpdate}>
                                <div class="mb-6">
                                    <label for="task"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edit task</label>
                                    <input type="text" id="task"  value={EditedTaskTitle} onChange={(e)=>setEditedTaskTitle(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Add new task" required/>
                                </div>
                                <div class="mb-6">
                                    <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Task state</label>

                                   
                                    <select type="text" id="state" value={EditedTaskState} onChange={(e)=>setEditedTaskState(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full py-2.5 px-2  focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                                   
                                    <option selected>Select the state</option>
                                            <option value="-1">Not yet</option>
                                            <option value="0">In progress</option>
                                            <option value="1">Done</option>
                                    </select>
                                </div>
                                <div class="mb-6">
                                    <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                                    <input type="date" id="date"  value={EditedTaskDate} onChange={(e)=>setEditedTaskDate(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
                                </div>
                            
                                <button type="submit" class="text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/8">Update task</button>
                                </form>
                                </div>
                           ):null}
                                   
                        </div>
                        :''}
                              
                    
                        </div>

                      
                     </div>
                       
                        
                
                    <div class=" flex flex-col gap-4 justify-start items-center max-h-[520px] shadow-box-sh w-1/4  p-6 rounded-xl mt-10">
                      
                    <ul className="flex flex-col gap-y-4 pt-7 cursor-pointer">
                    <li>
                        <motion.div className="flex gap-x-4 items-center py-3 text-white  hover:text-indigo-600 group rounded-lg   pl-4 pr-4"
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

export default Tracker;