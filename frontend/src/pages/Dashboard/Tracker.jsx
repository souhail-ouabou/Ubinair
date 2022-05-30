import React, { useState,useEffect } from 'react'
import Logo from '../../img/Logo.png'
import { FaThLarge } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import { BsQuestionLg } from 'react-icons/bs'
import { ViewMode, Gantt } from 'gantt-task-react'
import {motion}  from 'framer-motion'
import 'gantt-task-react/dist/index.css'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import {HashLink as Link} from 'react-router-hash-link'
import { UpdateSpecProject } from '../../redux/actions/projectActions'
import { ObjectID } from 'bson';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import './style.css'

import {
    Getprojectdetails,
    UpdateProject,
} from '../../redux/actions/projectActions'
import { useParams } from 'react-router-dom'
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'




const Tracker = () => {

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
const { loading, user ,isAdmin} = getUserReducer

    useEffect(() => {
        if (user.client) {
            dispatch(Getprojectdetails(id))
        }
    }, [user.client])


  
    const [addedTaskTitle,setAddedTaskTitle]=useState('')
    const [addedTaskDescription,setAddedTaskDescription]=useState('')
    const [addedTaskState,setAddedTaskState]=useState('')
    const [addedTaskDate,setAddedTaskDate]=useState('')
   
    const [EditedTaskId,setEditedTaskId]=useState('')
    const [EditedTaskTitle,setEditedTaskTitle]=useState('')
    const [EditedTaskDescription,setEditedTaskDescription]=useState('')
    const [EditedTaskState,setEditedTaskState]=useState('')
    const [EditedTaskDate,setEditedTaskDate]=useState('')
   

    const [tasksProject,setTasks]=useState([])
    
   const [Admin,setIsadmin]=useState(false)
   const [specification, setSpec] = useState([])
    
  

   

  


    let changeState=(id) => {
        
       if(!Admin)return;
      
         console.log(JSON.stringify(specification[index].projectTasks));
           
            let newState
            let newtask =specification[index].projectTasks.map((item) => {
              
             if(item.id==id){
                 if(item.state==-1){
                     console.log('0');
                    newState=0
                 }else if(item.state==0){
                    newState=1
                    console.log('1');
                 }else if(item.state==1){
                    newState=-1;
                    console.log('-1');
                 }
              
                return { ...item,state:newState };
            
             }else{
                 return item;
             }
             
            });
            // console.log('newarr',JSON.stringify(newArr))
            let newArr=specification;
            newArr[index].projectTasks=newtask
            console.log('console new task',JSON.stringify(newtask));
            setSpec(newArr);
           
                 setEdit(true)
          

            // console.log(JSON.stringify(tasksProject));
           
          };

     const percentage=60;
    const [title,setTitle]=React.useState('')
    const [showForm, setShowForm] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editCirBar, setEditCirBar] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
     const today=
      new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date())
    const [view, setView] = React.useState(ViewMode.Day)
    const [design, setDesign] = React.useState(false)
    const [content, setTContent] = React.useState(false)
    const [inte, setInte] = React.useState(false)
    const [designValue, setDesignValue] = React.useState(0)
    const [ContentValue, setContentValue] = React.useState(0)
    const [inteValue, setInteValue] = React.useState(0)
    const [index,setIndex]=React.useState(0)
    const [updatedTasks,setupdatedTask]=React.useState([])
    const[estimatedValue,setEstimated]=React.useState(0)
    

   const handleClickShow=(index)=>{
        setTContent(false)
        setInte(false)
        setDesign(false)
        setShowForm(false)
        setShowFormUpdate(false)
        setIndex(index)
    
        if(index==1){
            
            setInte(true)
            setTitle('Integration')

          
            
            // setTasks(tasksDesign)
       }else if(index==2){
            setTContent(true)
            setTitle('Content')
            // setTasks(tasksContent)
       }else{
            setDesign(true)
           
            setTitle('Design')
            // setTasks(tasksInte)
       }

      

       calculCircle();
        console.log('here is it ',title);
       
      
    }

         

            useEffect(()=>{
        
                    if(!loadingProjectDetails && edit){
                        console.log('test',JSON.stringify('comming from state ',JSON.stringify(specification)));
                        // dispatch(UpdateTasksProject(id, tasksProject))
                        dispatch(UpdateSpecProject(id,index, specification))
                        calculCircle()
                        setEdit(false)
                    
                    }
                                                        

                    },[loadingProjectDetails,specification,edit])

                            useEffect(()=>{
                                if (!loadingProjectDetails){
                                
                                    // console.log('test',JSON.stringify(JSON.stringify(projectDetails)));
                                    // setTasks(projectDetails.projectTasks)
                                    setSpec(projectDetails.specification)
                                    setIsadmin(isAdmin)
                                    // console.log('test',JSON.stringify(JSON.stringify(specifications)))
                                    
                            }
                            },[loadingProjectDetails])

                            useEffect(() => {
                                if (!loadingProjectDetails && editCirBar) {
                                    console.log('test spec',JSON.stringify(specification));
                                    dispatch(UpdateSpecProject(id,index,specification))
                                    console.log('disapatched');
                                    setEditCirBar(false)
                                
                                }
                            }, [specification])

    
    let calculCircle=()=>{
        console.log('hello im calculatur ------------------------');
        if(title=='') return;
        let sumProgV=0
        let sumEstiV=0
  
        specification[index].projectTasks.map((item)=>{
           
            // console.log('--------------------------test'+( moment(item.date)<Date.now()));
             if(item.state==-1){
                
              sumProgV+=0;
              
              console.log('-1   prog'+sumProgV+' sus value'+sumEstiV);
              if(moment(item.date)<Date.now()){ sumEstiV+=100}
             }else if(item.state==0){
                sumProgV+=50
               
                console.log('0   prog'+sumProgV+' sus value'+sumEstiV);
                  if(moment(item.date)<Date.now()) {sumEstiV+=100;console.log('sus after con'+sumEstiV)}
             }else if(item.state==1){
              
                sumProgV+=100
               
                console.log('1   prog'+sumProgV+' sus value'+sumEstiV);
                
                 if(moment(item.date)<Date.now()){ sumEstiV+=100;console.log('sus after con'+sumEstiV)}
  
             }
          }
          ) 

          let newProgValue;
          let newEstimValue;
          let length=specification[index].projectTasks.length
          if(title=='Design'){
            console.log('befor devi prog val '+sumProgV+ ' esti v ' +sumEstiV);
            length?newProgValue=sumProgV/length:newProgValue=0
            length?newEstimValue=sumEstiV/length:newEstimValue=0

            console.log('after devi prog val '+newProgValue+ ' esti v ' +newEstimValue);
            
          }else if(title=='Content'){
            length?newProgValue=sumProgV/length:newProgValue=0
            length?newEstimValue=sumEstiV/length:newEstimValue=0
           
          }else{
            length?newProgValue=sumProgV/length:newProgValue=0
            length?newEstimValue=sumEstiV/length:newEstimValue=0
            
          }

          setSpec(
            specification.map((s)=>{
                if(s.title==title){
                   return{...s,progresState:newProgValue,estimatedState:newEstimValue}
                }
               
                return s;
    
            }
          )
        )
        setEditCirBar(true)
        //   setCirValue(sum/tasks.filter(t=>t.type==title).length)
        
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
       let dateFormed=new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
       }).format(new Date(addedTaskDate))


       
        console.log('avantHH lajout',JSON.stringify(specification));

       const newtasks=specification;
       console.log('index',index);
       
        newtasks[index].projectTasks=newtasks[index].projectTasks.concat({id:new ObjectID(),
        title:addedTaskTitle,state:addedTaskState,date:dateFormed,description:addedTaskDescription})

        console.log('the res j', JSON.stringify(newtasks[index].projectTasks));
       setSpec(newtasks)

       console.log('aprés lajout',JSON.stringify(specification));
       setEdit(true)
       setShowForm(!showForm)
    //    dispatch(UpdateTasksProject(id, newtasks))
    //    console.log('objects',JSON.stringify(newtasks));
       
       
       
   }

   const deleteHandle=(i)=>{
    const newtasks=specification;
    newtasks[index].projectTasks=newtasks[index].projectTasks.filter(t=>t.id!==i)
    setSpec(newtasks)
    setEdit(true)
    // dispatch(UpdateTasksProject(id, newtasks))
   }

   const editeHandle=(taskObjet)=>{
     setEditedTaskId(taskObjet.id)
     setEditedTaskTitle(taskObjet.title)
     setEditedTaskDescription(taskObjet.description)
     setEditedTaskState(taskObjet.state)
     setEditedTaskDate(moment(taskObjet.date).format("YYYY-MM-DD"))
     editbtnHandler()
   }

   const handleUpdate=(e)=>{
    e.preventDefault();
    let dateFormed=new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
       }).format(new Date(EditedTaskDate))
     

       let editedtask={id:EditedTaskId,title:EditedTaskTitle
        ,state:EditedTaskState,date:EditedTaskDate,description:EditedTaskDescription}
       
      //start change
      
      let updatedTasks=specification[index].projectTasks.map((t,x)=>{
          if(t.id==EditedTaskId){
                console.log('i was there');
                 return {...t,id:EditedTaskId,title:EditedTaskTitle
                    ,state:EditedTaskState,date:EditedTaskDate,description:EditedTaskDescription}
                 
               }
              return t
              
            })
    
      console.log('out boucle ');

      let updatedSpec=specification
      updatedSpec[index].projectTasks=updatedTasks

     console.log('console log updatedSpec',JSON.stringify(updatedTasks));
    setSpec(updatedSpec)

    setEdit(true)
    setShowFormUpdate(false)
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
  
                <top className="flex gap-4 w-full ">

                    
                <div class="flex flex-row flex-wrap justify-between w-3/4 text-white pt-20 pr-10"> 

                
                 <div class="text-3xl font-semibold leading-relaxed text-slate-100">
                     {
                     title
                     }
                 </div>
                 <div class="text-2xl font-semibold leading-relaxed text-slate-100 pt-2">
                    {design||content||inte? today:''}
                 </div>
                
                 <div class="flex justify-start mb-36">
                
                 
                       
                        {design||content||inte?
                         <div class="">
                            <table class="w-[800px]  shadow-box-sh "
                           >
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
                               {Admin?'Action':'Description'}
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody class="text-xl bg-white text-center" id="Form" >
                    {specification[index].projectTasks.map((taskObj,i)=>(
               
                        <tr  key={i} class="whitespace-nowrap cursor-pointer"

                         
                          
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
                                    onClick={()=>changeState(taskObj.id)}>Done</button>
                               }

                              {taskObj.state==0 &&
                                   <button type="button" class="inline-block px-4 py-2 bg-yellow-500 
                                   text-white font-medium text-sm leading-tight  rounded-full 
                                   shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600
                                    focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700
                                     active:shadow-lg transition duration-150 ease-in-out"
                                     onClick={()=>changeState(taskObj.id)}>In progress</button>
                              }

                              {taskObj.state==-1 &&
                                   <button type="button" class="inline-block px-4 py-2 bg-red-600
                                    text-white font-medium text-sm leading-tight  rounded-full
                                     shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 
                                     focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800
                                      active:shadow-lg transition duration-150 ease-in-out"
                                      onClick={()=>changeState(taskObj.id)}>Not yet</button>
                             }
                           
                                </div>
                           </td>
                     
                            <td class="px-6 py-4 text-gray-900 text-center">
                            {
                            //  taskObj.date

                            moment(taskObj.date).format("DD MMM YYYY")
                            
                            // console.log('date',new Date().toLocaleDateString('en-GB', {
                            //         day: 'numeric',
                            //         month: 'short',
                            //         year: 'numeric',
                            //     }))
                            }
                        
                                {/* <a href="#" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">Edit</a> */}
                            </td>

                            <td class="px-6 py-4 text-gray-900 text-center">
                            {Admin?<>
                           <Link to="#Form">
                            <button
                                className="top-3 right-3"
                                type="button"
                                onClick={()=>editeHandle(taskObj)}
                           
                            >
                                
                                <FaRegEdit className="text-green-900" />
                            </button>
                            </Link>
                           
                            <button
                                className="top-3 ml-2"
                                type="button"
                                onClick={()=>deleteHandle(taskObj.id)}
                           
                            >
                            
                                <RiDeleteBin6Fill className="text-red-600" />
                            </button>
                            </>: 
                            <div class="bd">

                            <button class="btn">
                            <BsQuestionLg className="text-blue-900" />
                            <span>{taskObj.description}</span>
                            </button>
                               </div>
                           }

                            
                              
                            </td>
                     
                        </tr>

                        ))}
                          </tbody>
                        </table>
                        {Admin?
                        <Link to="#Form">
                        <button type="submit"  onClick={addbtnHandler} class="text-white
                        rounded-full text-2xl mt-2  px-5 py-2.5 text-center bg-gradient-to-r
                         from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br
                          focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 
                          shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/8">+</button>
                          </Link>
                          :null}
                             
                        {/* <button type="submit" onClick={editbtnHandler} class="text-white
                        rounded-full text-sm mt-2 ml-2  px-5 py-5 text-center bg-gradient-to-r
                         from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br
                          focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 
                          shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/8"><i><FiEdit2/></i></button> */}






                        {showForm?(
                                <div className='bg-white mt-3 px-6 py-6 rounded-lg' >
                                <form onSubmit={handleSubmit}>
                                <div class="mb-4">
                                    <label for="task" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New task</label>
                                    <input type="text" id="task" value={addedTaskTitle} onChange={(e)=>setAddedTaskTitle(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Add new task" required/>
                                </div>
                                <div class="mb-4">
                                    <label for="task" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                                    <textarea type="text" id="task" value={addedTaskDescription} onChange={(e)=>setAddedTaskDescription(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Add description" required>
                                    </textarea>
                                </div>
                                <div class="mb-4">
                                    <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Task state</label>

                                   
                                    <select type="text" id="state"  value={addedTaskState} onChange={(e)=>setAddedTaskState(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full py-2.5 px-2 focus:outline-none  focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                                   
                                    <option selected>Select the state</option>
                                            <option value="-1">Not yet</option>
                                            <option value="0">In progress</option>
                                            <option value="1">Done</option>
                                    </select>
                                </div>
                                <div class="mb-4">
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
                                <div class="mb-4">
                                    <label for="task"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edit task</label>
                                    <input type="text" id="task"  value={EditedTaskTitle} onChange={(e)=>setEditedTaskTitle(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Add new task" required/>
                                </div>
                                <div class="mb-4">
                                    <label for="task" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                                    <textarea type="text" id="task" value={EditedTaskDescription} onChange={(e)=>setEditedTaskDescription(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Add new task" required>
                                    </textarea>
                                </div>
                                <div class="mb-4">
                                    <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Task state</label>

                                   
                                    <select type="text" id="state" value={EditedTaskState} onChange={(e)=>setEditedTaskState(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full py-2.5 px-2  focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                                   
                                    <option selected>Select the state</option>
                                            <option value="-1">Not yet</option>
                                            <option value="0">In progress</option>
                                            <option value="1">Done</option>
                                    </select>
                                </div>
                                <div class="mb-4">
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
                       
                        
        {loadingProjectDetails ? (
                <div className="col-right text-white w-[130px]">
                    Loaaading ...
                </div>
                    ) : (
                    <div class="flex flex-col gap-4 justify-start items-center max-h-[520px] shadow-box-sh w-1/4  p-6 rounded-xl mt-10">
                      
                    <ul className="flex flex-col gap-y-4 pt-7 cursor-pointer">
                    
                   
                    {specification.map((p,i) => (
                        

                    <li key={i}>
                        <motion.div className="flex  justify-between gap-x-4  py-3 text-white   group rounded-lg  pl-4 pr-4"
                             whileHover={{
                                boxShadow:"0px 0px 8px rgb(255,255,255)"
                            }}
                               transition={{duration:0.2}}
                               onClick={()=>handleClickShow(i)}
                               >
                              
                        <div>
                       
                            <h1 class="text-xl pt-2 font-semibold leading-relaxed text-slate-100">
                               {p.title}
                            </h1>
                           
                        </div>
                        <div class="ml-5" style={{ width: 50, height: 50 }}>
                            <CircularProgressbarWithChildren
                                value={p.estimatedState}
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
                                    value={p.progresState}
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
                    ))}
                   
                    
                    {design?<>
                    <hr/>
                    <li class="m-auto">
                    <div style={{ width: 150, height: 150 }}>
                           
                            <CircularProgressbarWithChildren
                                value={specification[0].estimatedState}
                                text={specification[0].progresState.toFixed(0)+"%"}
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
                                    value={specification[0].progresState}
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
                                value={specification[2].estimatedState}
                                text={specification[2].progresState.toFixed(0)+"%"}
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
                                    value={specification[2].progresState}
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
                                value={specification[1].estimatedState}
                                text={specification[1].progresState.toFixed(0)+"%"}
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
                                    value={specification[1].progresState}
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
                    )}
                </top>
                
                <bottom className="flex items-center justify-center gap-12">

           
                            
                  
                       
                </bottom>

            </main>
        </div>

      
    )
    
}

export default Tracker;