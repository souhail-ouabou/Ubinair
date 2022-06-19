import React, { useState,useEffect } from 'react'

import { FaRegEdit } from 'react-icons/fa'
import { BsQuestionLg } from 'react-icons/bs'

import {motion}  from 'framer-motion'
import 'gantt-task-react/dist/index.css'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import {HashLink as Link} from 'react-router-hash-link'
import { UpdateSpecProject } from '../../redux/actions/projectActions'
import { ObjectID } from 'bson';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import './style.css'

import {
    Getprojectdetails,

} from '../../redux/actions/projectActions'

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'




const Tracker = ({indexPage}) => {

    const dispatch = useDispatch()
    const { id } = useParams()
    
    const GetProjectDetailsReducer = useSelector(
        (state) => state.GetProjectDetailsReducer
    )
    const {
        project: projectDetails,
        loading: loadingProjectDetails,
    } = GetProjectDetailsReducer

    const getUserReducer = useSelector((state) => state.getUserReducer)
    const { user,isAdmin} = getUserReducer

    useEffect(() => {
        if (user?.client) {
            dispatch(Getprojectdetails(id))
        }
    }, [user?.client])


    const [operatedObj,setOpObj]=useState({id:'',title:'',state:'',date:'',description:''})
    const [start,setStart]=useState(true)
    const [Admin,setIsadmin]=useState(false)
    const [specification, setSpec] = useState([])
    const [title,setTitle]=useState('')
    const [showForm, setShowForm] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editCirBar, setEditCirBar] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [activeTab,setActiveTab]=useState()
    const today=
      new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date())

    const [index,setIndex]=React.useState()
  

   

  

    // change state of task 
    let changeState=(idx) => {
   
       if(!Admin)return;
       console.log('iwa s in change state');
        //  console.log(JSON.stringify(specification[index].projectTasks));
           
            let newState
            let newtask =specification[index].projectTasks.map((item) => {
              
             if(item.id==idx){
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
         
            let newArr=specification;
            newArr[index].projectTasks=newtask
            console.log('console new task',JSON.stringify(newtask));
           
            setSpec(newArr);
            calculCircle()
            setEdit(true)
           
              
        
              
      
           
          };

   

    
   //tabulation
   const handleClickShow=(index)=>{
 
     setActiveTab(index)
     console.log('active tab --------------'+activeTab);
        if (specification.length !== 0) {
            specification.map((sp,i) => {
                if (index === i) {
                   
                    setTitle(sp.title)
                }
            })
        }
        setShowForm(false)
        setShowFormUpdate(false)
        setIndex(index)
        calculCircle();
        console.log('here is it ',title);
       
      
    }

         

            useEffect(()=>{
                if(!specification.length==0){
                setTimeout(()=>{
                dispatch(UpdateSpecProject(id,index,specification))
                console.log('calculated');
                setEdit(false)
                },200)
              }
              },[edit])

                useEffect(()=>{
                            if(specification.length==0){
                            console.log('je set mon projet ---------------------');
                            setSpec(projectDetails.specification)
                            setIsadmin(isAdmin)
                            }
                            
                    
                })

                           

    
        //calculate estimated and progress state                   
        let calculCircle=()=>{
        
            if(title=='') return;
            let sumProgV=0
            let sumEstiV=0
    
            specification[index].projectTasks.map((item)=>{
            
                if(item.state==-1){
                    
                sumProgV+=0;
                
                if(moment(item.date)<Date.now()){ sumEstiV+=100}

                }else if(item.state==0){

                    sumProgV+=50
                
                    if(moment(item.date)<Date.now()) {sumEstiV+=100}

                }else if(item.state==1){
                
                    sumProgV+=100
                    
                if(moment(item.date)<Date.now()){sumEstiV+=100}
    
                }
            }
            ) 

            let newProgValue;
            let newEstimValue;
            let length=specification[index].projectTasks.length
        
                length?newProgValue=sumProgV/length:newProgValue=0
                length?newEstimValue=sumEstiV/length:newEstimValue=0


            setSpec(
                specification.map((s)=>{
                    if(s.title==title){
                    return{...s,progresState:newProgValue,estimatedState:newEstimValue}
                    }
                
                    return s;
        
                }
            )
            )
            // setEditCirBar(true)
        }



      
        //display forms
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


        //Store task
        const handleSubmit=(e)=>{
            e.preventDefault();
            let dateFormed=new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit"
            }).format(new Date(operatedObj.date))

            const newtasks=specification;
        
            
                newtasks[index].projectTasks=newtasks[index].projectTasks.concat({id:new ObjectID(),
                title:operatedObj.title,state:operatedObj.state,date:dateFormed,description:operatedObj.description})

            setSpec(newtasks)
            calculCircle();
            setEdit(true)
            setShowForm(!showForm)

        }


        //delete task
        const deleteHandle=(i)=>{
            const newtasks=specification;
            newtasks[index].projectTasks=newtasks[index].projectTasks.filter(t=>t.id!==i)
            setSpec(newtasks)
            calculCircle();
            setEdit(true)
        }

        //edit preparation
        const editeHandle=(taskObjet)=>{
            setOpObj({...operatedObj,
                id:taskObjet.id,title:taskObjet.title,description:taskObjet.description,state:taskObjet.state,
                date:moment(taskObjet.date).format("YYYY-MM-DD")})
            
            editbtnHandler()
        }

       //update
        const handleUpdate=()=>{
           
            
            //start change
            
            let updatedTasks=specification[index].projectTasks.map((t,x)=>{
                if(t.id==operatedObj.id){
                        console.log('i was there');
                        return {...t,id:operatedObj.id,title:operatedObj.title
                            ,state:operatedObj.state,date:operatedObj.date,description:operatedObj.description}
                        
                    }
                    return t
                    
                    })
        

                let updatedSpec=specification
                updatedSpec[index].projectTasks=updatedTasks

                setSpec(updatedSpec)

                setEdit(true)
                setShowFormUpdate(false)
        }
     
    
    return (
    
        <React.Fragment>
          
            <main   className={
                        indexPage === 2 ? ' flex-1  pb-8  mt-14 ' : 'hidden'
                    } >
  
                <top className="flex gap-4 w-full ">

              
                <div class="flex flex-row flex-wrap glass justify-between w-[860px] text-white pt-20 mt-2 ml-80"> 
               
                {isNaN(index) &&
               
               <div class="text-2xl font-semibold text-center leading-relaxed text-slate-100 pt-20 pr-10">
                    Welcome to the task tracker , here you can see the progress of your project's tasks
               </div>

                }    


                 <div class="text-3xl font-semibold leading-relaxed  text-slate-100">
                     {
                     title
                     }
                 </div>
                 <div class="text-2xl font-semibold leading-relaxed text-slate-100 pt-2 ">
                    {!isNaN(index) && today}
                 </div>
                
                 <div class="flex justify-start mb-36">
                
                        {!isNaN(index) &&
                         <div class="">
                            <table class="w-[760px]  shadow-box-sh "
                           >
                                <thead class="text-xl bg-gray-200 ">
                       <tr>
                            <th class="px-4 py-2 text-gray-500 text-left w-[250px]">
                                Task List
                            </th>
                            <th class="px-6 py-2 text-gray-500  w-[200px] ">
                                Status
                            </th>
                            <th class="px-6 py-2 pr-4 text-gray-500 w-[200px]">
                               Date
                            </th>
                            <th class="px-6 py-2 pr-4 text-gray-500">
                               {Admin?'Action':'Description'}
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody class="text-xl bg-white text-center" id="Form" >
                    {specification[index]?.projectTasks.map((taskObj,i)=>(
               
                        <tr  key={i} class="whitespace-nowrap cursor-pointer"

                          >

                            <td class="px-4 py-4 text-gray-500 text-left "
                            
                             >
                                 {(showFormUpdate && operatedObj.id===taskObj.id ) ? (
                                 <input
                                        type="text"
                                        placeholder="add section"
                                        className="bg-gray-200 rounded-full px-2 w-full"
                                        value={operatedObj.title}
                                        onChange={(e)=>setOpObj({...operatedObj,title:e.target.value})}
                                        onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                              handleUpdate()
                                            }
                                          }}
                                        
                                      />
                            
                                  
                                 ):(
                                         taskObj.title
                                 )
                                }
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
                     
                            <td class="px-6 py-4  text-gray-900 text-center">
                        
                            {(showFormUpdate && operatedObj.id===taskObj.id ) ? (
                                 <input
                                        type="date"
                                        placeholder="add section"
                                        className="bg-gray-200 rounded-full px-2 w-[160px]"
                                        value={operatedObj.date}
                                        onChange={(e)=>setOpObj({...operatedObj,date:e.target.value})}
                                        onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                              handleUpdate()
                                            }
                                          }}
                                        
                                      />
                            
                                  
                            ):
                            (
                            moment(taskObj.date).format("DD MMM YYYY")
                            )
                         }
                            
                         
                            </td>

                            <td class="px-6 py-4 text-gray-900 text-center">
                            {Admin?<>
                           
                            <button
                                className="top-3 right-3"
                                type="button"
                                onClick={()=>editeHandle(taskObj)}
                           
                            >
                                
                                <FaRegEdit className="text-green-900" />
                            </button>
                         
                           
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
                        {Admin &&(
                        <Link to="#Form">
                        <button type="submit"  onClick={addbtnHandler} class="text-white
                        rounded-full text-2xl mt-2  px-5 py-2.5 text-center bg-gradient-to-r
                         from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br
                          focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 
                          shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/8">
                               {showForm ? 'x' : '+'}</button>
                          </Link>
                          )}
                             
                   
                        {showForm &&(
                                <div className='bg-white mt-3 px-6 py-6 rounded-lg' id="Form">
                                <form onSubmit={handleSubmit}>
                                <div class="mb-4">
                                    <label for="task" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New task</label>
                                    <input type="text" id="task" value={operatedObj.title} onChange={(e)=>setOpObj({...operatedObj,title:e.target.value})} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Add new task" required/>
                                </div>
                                <div class="mb-4">
                                    <label for="task" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                                    <textarea type="text" id="task" value={operatedObj.description} onChange={(e)=>setOpObj({...operatedObj,description:e.target.value})} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Add description" required>
                                    </textarea>
                                </div>
                                <div class="mb-4">
                                    <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Task state</label>

                                   
                                    <select type="text" id="state"  value={operatedObj.state} onChange={(e)=>setOpObj({...operatedObj,state:e.target.value})} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full py-2.5 px-2 focus:outline-none  focus:ring-purple-500 focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                                   
                                    <option selected>Select the state</option>
                                            <option value="-1">Not yet</option>
                                            <option value="0">In progress</option>
                                            <option value="1">Done</option>
                                    </select>
                                </div>
                                <div class="mb-4">
                                    <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                                    <input type="date" id="date" value={operatedObj.date} onChange={(e)=>setOpObj({...operatedObj,date:e.target.value})} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
                                </div>
                            
                                <button type="submit" class="text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/8">Add task</button>
                                </form>
                                </div>
                           )}

                                   
                        </div>
                        }
                    
                        </div>
                       
                     </div>
                        
        {specification.length==0 ? (
                <div className="text-white m-auto">
                    Loaaading ...
                </div>
                    ) : (
                    <div class="flex flex-col gap-4 justify-start items-center min-h-[600px] glass  w-[300px]  p-6 rounded-xl fixed top-28 right-8">
                      
                    <ul className="flex flex-col gap-y-4 pt-7 cursor-pointer">
                    
                   
                    {specification.map((p,i) => (
                        

                    <li key={i}>
                        <motion.div 
                        className={activeTab==i ?' flex  justify-between gap-x-4  py-3 text-white   group rounded-lg  pl-4 pr-4 shadow-box-sh':
                        'flex  justify-between gap-x-4  py-3 text-white   group rounded-lg  pl-4 pr-4'}
                        
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

                                    pathTransitionDuration: 0.5,
                                })}
                            >
                                <CircularProgressbar
                                    value={p.progresState}
                                    styles={buildStyles({
                                        trailColor: 'transparent',
                                        strokeLinecap: 'butt',
                                        pathColor: `rgba(99, 99, 199, ${
                                            60 / 10
                                        })`,
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                                  </CircularProgressbarWithChildren>
                            </div>
                        </motion.div>
                        
                    </li>
                    ))}
                   

                 {!isNaN(index) && <>
                    <hr/>
                    <li class="m-auto">
                    <div style={{ width: 150, height: 150 }}>
                        
                            <CircularProgressbarWithChildren
                                value={specification[index].estimatedState}
                                text={specification[index].progresState.toFixed(0)+"%"}
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
                                    value={specification[index].progresState}
                                    styles={buildStyles({
                                        trailColor: 'transparent',
                                        strokeLinecap: 'round',
                                        pathColor: `rgba(99, 99, 199, ${
                                            60 / 10
                                        })`,
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                            </CircularProgressbarWithChildren>
                        </div>
                    </li>
                    </>
                    }
                   </ul>

                    </div>
                    )}
                </top>
                
                <bottom className="flex items-center justify-center gap-12">

        
                </bottom>

            </main>
         </React.Fragment>

    )
    
}

export default Tracker;