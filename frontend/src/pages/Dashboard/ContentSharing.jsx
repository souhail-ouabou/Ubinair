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
                error,
            } = GetProjectDetailsReducer

            const initIndex=0;
            const [form,setForm]=useState(false)
            
            const [Contents,setContents]=useState([])
            const [activeTab,setActiveTab]=useState(0)
            const [addedSection,setAdded]=useState('')
            const [ChosenId,setChosenId]=useState('')
            const [showEditorVal, setShow] = useState('')


        

           const setChosen=(id,i)=>{
                  setActiveTab(i)
                  setChosenId(id)
                  console.log('id chosen'+ChosenId)
                    Contents.map((C)=>{
                    if(C.id==id) setShow(C.description);
                
                })

           }
            const  handleAddSection=()=>{
               
                let newContents=Contents.concat({id:new ObjectID(),title:addedSection,description:'Here you can your page content'})
                setContents(newContents)
                // dispatch(UpdateContentsProject(id,newContents))
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
                    projectDetails.contents && setChosenId(projectDetails.contents[initIndex]?.id)
                    projectDetails.contents && setShow(projectDetails.contents[initIndex]?.description)
                   
                    
            }
            },[loadingProjectDetails])
            
            const handleSave=(e)=>{
                dispatch(UpdateContentsProject(id,Contents))
            }

       

  return (
            <div  className={
                props.indexPage === 4 ? ' flex-1  pb-8  mt-14 ml-80' : 'hidden'
            }>



                    <div className="tabs_wrap">
                        <ul className="flex  md:items-center md:justify-center font-semibold text-[#EEEEEF] ">
                                {!loadingProjectDetails && Contents?.map((C,i)=>{
                                    return(
                                    <li key={i} className={activeTab==i ?'!bg-purple-600 px-20':'px-20'}
                                    onClick={()=>{
                                    setChosen(C.id,i)}}>

                                        {C.title}

                                    </li>
                                    )
                                })}
                                
                                <li
                                    className="h-12 text-center"
                                    onClick={()=>setForm(true)}
                                >
                                    {form ?(
                                        <input
                                        type="text"
                                        placeholder="add section"
                                        className="bg-gray-800 rounded-full text-center absolute top-0 left-2 w-[120px]"
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
