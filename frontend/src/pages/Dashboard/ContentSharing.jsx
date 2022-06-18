import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { BsDownload } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoMdAdd } from 'react-icons/io'
import {useState,useEffect} from 'react'
import TextEditor from './TextEditor'
import {ObjectID} from 'bson'
import 'react-quill/dist/quill.snow.css';
import { UpdateContentsProject } from '../../redux/actions/projectActions'
import Slider from 'react-slick'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function ContentSharing(props) {
            const dispatch = useDispatch()
            const { id } = useParams()

            const GetProjectDetailsReducer = useSelector(
                (state) => state.GetProjectDetailsReducer
            )
            const {
                project: projectDetails,
                loading: loadingProjectDetails,
            } = GetProjectDetailsReducer

            const initIndex=0;
            const [form,setForm]=useState(false)
            
            const [Contents,setContents]=useState([])
           
            const [activeTab,setActiveTab]=useState(0)
            const [editedTab,setEditedTab]=useState()
            const [addForm,setAddForm]=useState(false)
            const [addedSection,setAdded]=useState('')
            const [editedSection,setEdited]=useState('')
            const [ChosenId,setChosenId]=useState('')
            const [showEditorVal, setShow] = useState('')
            const [addblock,setAddblock]=useState(false)

     


           const setChosen=(id,i)=>{
                  setActiveTab(i)
                  setChosenId(id)
                  console.log('id chosen'+ChosenId)
                    Contents.map((C)=>{
                    if(C.id==id) setShow(C.description);
                
                })

           }
            const  handleAddSection=()=>{
                if(addedSection.length>13){
                    window.alert("you can't put more than 15 caracter");
                    return;
                }
                let newContents=Contents.concat({id:new ObjectID(),title:addedSection,description:'Here you can your page content'})
                setContents(newContents)
                dispatch(UpdateContentsProject(id,newContents))
                setAddForm(false)
                setAdded('')
            }

            const Editedinit=(title,id)=>{
                setEditedTab(id)
                setEdited(title)
                setForm(true)

            }
            const deletedinit=(i)=>{
                const conf=window.confirm('Are you sure ?')
                if(conf){
                let newContents=Contents.filter(t=>t.id!==i)
                setContents(newContents)
                dispatch(UpdateContentsProject(id,newContents))
                }
            }

            const  handleEditSection=(i)=>{
                if(editedSection.length>13){
                    window.alert("you can't put more than 14 caracter");
                    return;
                }
                let newContents=Contents.map((C)=>{
                    if(C.id==i)return {...C,title:editedSection}
                    return C;
                 })
                 setContents(newContents)
                 console.log('new contents',JSON.stringify(newContents));
                 dispatch(UpdateContentsProject(id,newContents))
                 setForm(false)

            }


            useEffect(()=>{
                if(ChosenId!==''){
                let newContents=Contents.map((C)=>{
                    if(C.id==ChosenId)return {...C,description:showEditorVal}
                    return C;
                 })
          
            setContents(newContents)
            console.log('new contents',JSON.stringify(Contents));

            }

            },[showEditorVal])

            useEffect(()=>{
                if (!loadingProjectDetails){
            
                    setContents(projectDetails.contents)
                    projectDetails.contents  && setChosenId(projectDetails.contents[initIndex]?.id)
                    projectDetails.contents && setShow(projectDetails.contents[initIndex]?.description)
                   
                   
                    
            }
            },[loadingProjectDetails])

            useEffect(()=>{
                if(Contents?.length>=7){
                            setAddblock(true)
                     }else{
                            setAddblock(false)
                     }
                
            },[Contents])
            
            const handleSave=(e)=>{
                console.log('----------------id');
                dispatch(UpdateContentsProject(id,Contents,true))
            }

  
       

  return (
      
            <div  className={
                props.indexPage === 4 ? ' flex-1  pb-8  mt-14 ml-80' : 'hidden'
            }>


 
                    <div className="tabs_wrap">
                    <ul className="flex  md:items-center md:justify-center font-semibold text-[#EEEEEF] ">
                                {!loadingProjectDetails && Contents?.map((C,i)=>{
                                    return(
                                    <li key={i} className={activeTab==i ?'!bg-purple-600 !w-40 h-12  group':'px-20 h-12 !w-40 group'}
                                    onClick={()=>{
                                    setChosen(C.id,i)}}
                                    // onClick={()=>click(C.id,i)}
                                    >
                                        {Contents.length>1 &&
                                         <span className="absolute -top-6 right-0 left-0 hidden group-hover:block "> 
                                         <button
                                                className="mr-1"
                                                type="button"
                                                onClick={()=>Editedinit(C.title,i)}
                                                
                                            >
                                                
                                                <FaRegEdit className="text-green-300 hover:text-green-100" />

                                         </button>
                                         <button
                                                className="ml-1"
                                                type="button"
                                                onClick={()=>deletedinit(C.id)}
                                            >
                                                
                                                <RiDeleteBin6Fill className="text-red-500 hover:text-red-300" />
                                                
                                         </button>
                                         </span>
                                   }
                                    {(form && editedTab===i)?(
                                        <input
                                        type="text"
                                        placeholder="add section"
                                        className="bg-gray-800 rounded-full text-center absolute top-0 left-1 w-[150px]"
                                        value={editedSection}
                                        onChange={(event)=>{setEdited(event.target.value)}}
                                        onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                              handleEditSection(C.id)
                                            }
                                          }}
                                      />
                                    ):(
                                       
                                        C.title
                                    
                                    )}

                                        

                                    </li>
                                    )
                                })}
                                {!addblock &&(
                                <li
                                    className="h-12 !w-40 text-center"
                                    onClick={()=>setAddForm(true)}
                                >
                                    {addForm ?(
                                        <input
                                        type="text"
                                        placeholder="add section"
                                        className="bg-gray-800 rounded-full text-center absolute top-0 left-1 w-[150px]"
                                        value={addedSection}
                                        onChange={(event)=>{setAdded(event.target.value)}}
                                        onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                              handleAddSection()
                                            }
                                          }}
                                      />
                                    ):(
                                        <IoMdAdd  className="m-auto text-2xl"  />
                                    
                                    )}
                                </li>
                                )}
                        </ul>
                </div>

                 <div  className="grid grid-cols-3 gap-x-4 grid-flow-row-dense ">
                     <div className="col-span-2 glass h-[700px]">
                                <div className='mt-4 pt-2 font-semibold text-[#EEEEEF] '>
                                        <span className="text-[1.8em] ">Copywrite</span>
                                </div>
                                <div className='bg-white h-[420px] text-black'>
                                <TextEditor onChangeTE={(val)=>setShow(val)}
                                showEditorVal={showEditorVal}

                                />
                                
                                </div>
                                <div className="text-center mt-3">  
                                        <button class="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={handleSave}

                                        >
                                        Save changes
                                        </button>
                                    </div>
                     </div>
                     <div className="glass font-semibold">

                                <div className='my-4 pt-2 '>
                                        <span className="text-[1.8em]  text-[#EEEEEF]  ">Media</span>
                                </div>
                                <div className="">
                                    <div className="border p-4 bg-gray-300 rounded-lg h-[420px]">

                                       <table className="w-full">
                                          <tr className='border-t-2 border-white text-[1.1em]'>
                                              <td className='py-2'>Hero background</td>
                                              <td className=''>
                                                  <div className='grid grid-cols-3 gap-x-1 cursor-pointer'>
                                                                 <span><label htmlFor="fileInputF"><BiSearchAlt /></label></span>
                                                                 <span><label><BsDownload /></label></span> 
                                                                 <span><label> <RiDeleteBin6Line /></label></span>  

                                                                 <input type="file" name="file" id="fileInputF" hidden/>
                                                 </div>                    
                                              </td>
                                          </tr>

                                          <tr className='border-y-2 border-white text-[1.1em]'>
                                              <td className='py-2'>Founder's photo</td>
                                              <td className=''>
                                                  <div className='grid grid-cols-3 gap-x-1 cursor-pointer'>
                                                                 <span><label htmlFor="fileInputS"><BiSearchAlt /></label></span>
                                                                 <span><label><BsDownload /></label></span> 
                                                                 <span><label> <RiDeleteBin6Line /></label></span>  

                                                                 <input type="file" name="file" id="fileInputS" hidden/>
                                                 </div>                    
                                              </td>
                                          </tr>
                                       </table>

                                    </div>
                                    <div className="text-center mt-3">  
                                        <button class="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full"
                                        >
                                        Upload
                                        </button>
                                    </div>
                                   
                                </div>
                     </div>
                 </div>
            </div>
  )
}
